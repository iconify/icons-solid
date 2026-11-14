import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dxis3m79a {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M4.75 1.75h11.5q3 0 3 3t-3 3H4.75q-3 0-3-3q0-1.243.879-2.121q.878-.879 2.121-.879m13 7.25H6.25q-3 0-3 3t3 3h11.5q3 0 3-3q0-1.243-.879-2.121Q18.993 9 17.75 9m-10 7.25h11.5q3 0 3 3t-3 3H7.75q-3 0-3-3q0-1.243.879-2.121q.878-.879 2.121-.879");
}
</style><path class="dxis3m79a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:call-stack"} {...others} />);
}

export default Component;
