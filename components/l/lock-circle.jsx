import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ylyl89pwg {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.75 12q0-4.246 3.002-7.248T12 1.75t7.248 3.002T22.25 12t-3.002 7.248T12 22.25t-7.248-3.002T1.75 12m8.75-1.749l.125-.001h2.75l.125.001V9.5Q13.5 8 12 8t-1.5 1.5zm4.5.263V9.5q0-3-3-3t-3 3v1.014q-1.75.681-1.75 3.111v1.25q0 3.375 3.375 3.375h2.75q3.375 0 3.375-3.375v-1.25q0-2.43-1.75-3.111");
}
</style><path class="ylyl89pwg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:lock-circle"} {...others} />);
}

export default Component;
