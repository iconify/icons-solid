import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rk6jykvpt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 3v9m0 4v5m7-18v2.5m0 4V21m7-18v11.5m0 4V21M3 14a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7-6.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7 9a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><path class="rk6jykvpt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:settings-sliders-vertical"} {...others} />);
}

export default Component;
