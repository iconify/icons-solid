import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m11lwm_yn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 15a3 3 0 0 1-2-5.5A3.5 3.5 0 0 1 8.5 5a4 4 0 0 1 7 0A3.5 3.5 0 0 1 20 9.5a3 3 0 0 1-2 5.5Zm4.5 0l-.5 6.5m3.5-6.5l.5 6.5");
}
</style><path class="m11lwm_yn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:oak-tree"} {...others} />);
}

export default Component;
