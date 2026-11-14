import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lsfe9krhs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 7.5a3.5 3.5 0 0 1 5 5L5.75 19.75a1.5 1.5 0 0 0-1.5-1.5Zm5 0L16 3.25m.5 4.25L20 3.75M16.5 7.5l4.25.5");
}
</style><path class="lsfe9krhs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:carrot-treat"} {...others} />);
}

export default Component;
