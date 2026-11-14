import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.otp4nilnj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20v-5.379a1.5 1.5 0 0 1 .439-1.06l2.233-2.233a1.5 1.5 0 0 1 1.832-.225l1.14.683a1.5 1.5 0 0 0 .771.214h3.155a1.5 1.5 0 0 0 .795-.228l2.69-1.682a1.5 1.5 0 0 1 1.783.143l2.65 2.319A1.5 1.5 0 0 1 21 13.681V20a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 20m8-8l4.5-7.5m-3-1.5l3 1.5Q18.5 6 20 9");
}
</style><path class="otp4nilnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:ice-climber"} {...others} />);
}

export default Component;
