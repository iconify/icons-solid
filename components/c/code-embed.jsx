import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cwwub_b-p {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M6.5 1.75h6q1.76 0 3.005 1.245T16.75 6v9.5q0 1.76-1.245 3.005T12.5 19.75h-6q-1.76 0-3.005-1.245T2.25 15.5V6q0-1.76 1.245-3.005T6.5 1.75");
}
</style><path class="cwwub_b-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:code-embed"} {...others} />);
}

export default Component;
