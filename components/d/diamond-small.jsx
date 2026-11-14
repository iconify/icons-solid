import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lc6lu-qnc {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m13.767 7.207l3.026 3.026q1.766 1.767.001 3.534l-3.027 3.026q-1.767 1.766-3.534.001l-3.026-3.027Q5.441 12 7.206 10.233l3.027-3.026Q12 5.441 13.767 7.206z");
}
</style><path class="lc6lu-qnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:diamond-small"} {...others} />);
}

export default Component;
