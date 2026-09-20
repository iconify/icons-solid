import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.td-6pli-v {
  fill: currentColor;
  d: path("M5 19V5.616q0-.667.475-1.141T6.615 4h10.77q.666 0 1.14.475T19 5.615V19h1.5q.213 0 .356.144t.144.357t-.144.356T20.5 20h-17q-.213 0-.356-.144T3 19.499t.144-.356T3.5 19zm5.75 0h2.5V5h-2.5z");
}
</style><path class="td-6pli-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:curtains-closed-rounded"} {...others} />);
}

export default Component;
