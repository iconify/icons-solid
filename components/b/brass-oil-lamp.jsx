import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lsv8hws6c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 10h14c0 2-3 3-7 3s-7-1-7-3Zm7 3v5.5M8 21l1.5-2.5h5L16 21Zm4-18.5C10 5 9.75 7.25 12 7.25S14 5 12 2.5Z");
}
</style><path class="lsv8hws6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:brass-oil-lamp"} {...others} />);
}

export default Component;
