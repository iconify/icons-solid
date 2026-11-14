import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t1rkskb7l {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m14.424 4.715l3.85 5.626q1.134 1.659 0 3.317l-3.85 5.627q-.875 1.277-2.424 1.277t-2.424-1.277l-3.85-5.626q-1.134-1.659 0-3.317l3.85-5.627Q10.451 3.438 12 3.438t2.424 1.277");
}
</style><path class="t1rkskb7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:diamond-suit"} {...others} />);
}

export default Component;
