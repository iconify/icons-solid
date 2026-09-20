import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fg8_m3rti {
  fill: currentColor;
  d: path("M14.7 20.7L11 17l3.7-3.7l1.4 1.45L14.85 16h2.4q.725 0 1.238-.513T19 14.25t-.513-1.237t-1.237-.513H4v-2h13.25q1.575 0 2.663 1.088T21 14.25t-1.088 2.663T17.25 18h-2.4l1.25 1.25zM4 18v-2h5v2zM4 7V5h16v2z");
}
</style><path class="fg8_m3rti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:wrap-text-outline"} {...others} />);
}

export default Component;
