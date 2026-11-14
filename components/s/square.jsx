import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vgz4piszl {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M7 2.75h10q1.76 0 3.005 1.245T21.25 7v10q0 1.76-1.245 3.005T17 21.25H7q-1.76 0-3.005-1.245T2.75 17V7q0-1.76 1.245-3.005T7 2.75");
}
</style><path class="vgz4piszl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:square"} {...others} />);
}

export default Component;
