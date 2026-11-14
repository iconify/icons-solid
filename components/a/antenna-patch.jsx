import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k1k4urh4n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4 5l4-1.5v11L4 16Zm2 10.25v5.25m-2.5 0h5m3.75-14a6 6 0 0 1 0 6m3-7.75a9.5 9.5 0 0 1 0 9.5m3-11.25a13 13 0 0 1 0 13");
}
</style><path class="k1k4urh4n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:antenna-patch"} {...others} />);
}

export default Component;
