import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hvep4hbfg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 3.5h3A1.75 1.75 0 0 1 10 5.25v3A1.75 1.75 0 0 1 8.25 10h-3A1.75 1.75 0 0 1 3.5 8.25v-3A1.75 1.75 0 0 1 5.25 3.5m10.5 0h3a1.75 1.75 0 0 1 1.75 1.75v3A1.75 1.75 0 0 1 18.75 10h-3A1.75 1.75 0 0 1 14 8.25v-3a1.75 1.75 0 0 1 1.75-1.75M5.25 14h3A1.75 1.75 0 0 1 10 15.75v3a1.75 1.75 0 0 1-1.75 1.75h-3a1.75 1.75 0 0 1-1.75-1.75v-3A1.75 1.75 0 0 1 5.25 14m1.5-7.25h.01m10.49 0h.01M6.75 17.25h.01M19.5 14.5V19a2.25 2.25 0 0 1-4.5 0v-1.25");
}
</style><path class="hvep4hbfg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:phishing-qr"} {...others} />);
}

export default Component;
