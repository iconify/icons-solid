import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wkiqoub_x {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M14.375 2.75h-4.75q-2.848 0-4.861 2.014T2.75 9.625v4.75q0 2.848 2.014 4.861t4.861 2.014h4.75q2.848 0 4.861-2.014t2.014-4.861v-4.75q0-2.848-2.014-4.861T14.375 2.75m-4.947 13q-1.28 0-2.028-1.038t-.344-2.252l.833-2.5q.57-1.71 2.372-1.71h3.478q1.802 0 2.372 1.71l.833 2.5q.404 1.214-.344 2.252t-2.028 1.038z");
}
</style><path class="wkiqoub_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:element-erbium"} {...others} />);
}

export default Component;
