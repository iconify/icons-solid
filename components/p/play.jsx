import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ex2uaytfc {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m11.444 5.954l5.005 3.203q1.556.996 1.556 2.843t-1.556 2.843l-5.005 3.203q-1.685 1.078-3.439.118T6.25 15.203V8.797q0-2 1.755-2.961t3.439.118");
}
</style><path class="ex2uaytfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:play"} {...others} />);
}

export default Component;
