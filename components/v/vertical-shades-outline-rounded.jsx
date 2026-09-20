import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z0y8qbcep {
  fill: currentColor;
  d: path("M3.5 20q-.213 0-.356-.144T3 19.499t.144-.356T3.5 19H5V5.616q0-.667.475-1.141T6.615 4h10.77q.666 0 1.14.475T19 5.615V19h1.5q.213 0 .356.144t.144.357t-.144.356T20.5 20zM6 19h2.75V5H6.616q-.27 0-.443.173T6 5.616zm3.75 0h4.5V5h-4.5zm5.5 0H18V5.616q0-.27-.173-.443T17.385 5H15.25zM6 19V5zm12 0V5z");
}
</style><path class="z0y8qbcep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:vertical-shades-outline-rounded"} {...others} />);
}

export default Component;
