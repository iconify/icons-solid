import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xmro_kbfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.31 20.69a2.75 1.6-45 1 0 3.88-3.88a2.75 1.6-45 1 0-3.88 3.88m3.94-3.94L19 5m2 4.5c.5 5-3.5 10.5-9.5 11");
}
</style><path class="xmro_kbfx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:conductor-baton"} {...others} />);
}

export default Component;
