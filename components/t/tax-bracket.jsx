import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j1uyq679f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.7 15.5H3v-4h4.75V7.25h4.5V3H17v10.1m-9.25-1.6v4m4.5-8.25v8.25m2.5 5.75l6.5-6.5m-5.75.75h.01m4.99 5h.01");
}
</style><path class="j1uyq679f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:tax-bracket"} {...others} />);
}

export default Component;
