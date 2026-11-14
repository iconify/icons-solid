import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yf5phacrh {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5 8.75h.5q2.613 0 3.125 2.1q.512-2.1 3.125-2.1h.5q2.613 0 3.125 2.1q.512-2.1 3.125-2.1h.5q1.346 0 2.298.952T22.25 12q0 3.25-3.25 3.25h-.5q-2.613 0-3.125-2.1q-.512 2.1-3.125 2.1h-.5q-2.613 0-3.125-2.1q-.512 2.1-3.125 2.1H5q-3.25 0-3.25-3.25q0-1.346.952-2.298T5 8.75");
}
</style><path class="yf5phacrh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:polymerisation"} {...others} />);
}

export default Component;
