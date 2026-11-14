import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iieagpbuq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 13c-2-1.5-5.5-2-9.5-1.5V20c4-.5 7.5 0 9.5 1.5c2-1.5 5.5-2 9.5-1.5v-8.5c-4-.5-7.5 0-9.5 1.5Zm0 0v8.5m3-19a3.5 3.5 0 1 0 0 6a3.5 3.5 0 0 1 0-6Z");
}
</style><path class="iieagpbuq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:night-reading"} {...others} />);
}

export default Component;
