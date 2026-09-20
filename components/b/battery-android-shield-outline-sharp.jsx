import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yf-v8rfkr {
  fill: currentColor;
  d: path("M1 18V6h14.9L12 8H3v8h11.1q.425.575.925 1.075T16.1 18zm2-2V8zm15.5 1q-2-.725-3.25-2.95T14 9q1.025-.125 2.125-.625T18.5 7q1.275.875 2.375 1.375T23 9q0 2.825-1.25 5.05T18.5 17m0-2.225q.875-.575 1.5-1.7t.875-2.55q-.575-.2-1.162-.488T18.5 9.375z");
}
</style><path class="yf-v8rfkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:battery-android-shield-outline-sharp"} {...others} />);
}

export default Component;
