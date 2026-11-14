import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x9dbcb39c {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18 4.25H6q-1.76 0-3.005 1.245T1.75 8.5v7q0 1.76 1.245 3.005T6 19.75h12q1.76 0 3.005-1.245T22.25 15.5v-7q0-1.76-1.245-3.005T18 4.25M9.25 12q0-2.75 2.75-2.75T14.75 12T12 14.75T9.25 12");
}
</style><path class="x9dbcb39c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:pale-blue-dot"} {...others} />);
}

export default Component;
