import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r_5ku5vgz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 17c1.5-6.5 12.5-6.5 14 0M3 17h4v4H3Zm14 0h4v4h-4ZM4 6h5.5m5 0H20M9.5 4h5v4h-5Z");
}
</style><path class="r_5ku5vgz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pen-tool"} {...others} />);
}

export default Component;
