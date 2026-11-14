import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xmritobip {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.625 8h3.75A2.625 2.625 0 0 1 12 10.625v2.75A2.625 2.625 0 0 1 9.375 16h-3.75A2.625 2.625 0 0 1 3 13.375v-2.75A2.625 2.625 0 0 1 5.625 8M12 12a4 8.5 0 1 0 8 0a4 8.5 0 1 0-8 0m2.5 0h7.25");
}
</style><path class="xmritobip"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:anamorphic-lens"} {...others} />);
}

export default Component;
