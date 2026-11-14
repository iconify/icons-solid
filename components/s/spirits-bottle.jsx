import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zrn552b_e {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12.25 1.75h-.5Q9.5 1.75 9.5 4q0 .484.104.863q-.081.051-.147.12t-.113.153t-.07.176t-.024.188v2.25H9q-3.25 0-3.25 3.25v8.5q0 2.75 2.75 2.75h7q2.75 0 2.75-2.75V11q0-3.25-3.25-3.25h-.25V5.5q0-.096-.024-.188q-.024-.093-.07-.176q-.047-.084-.113-.153t-.147-.12Q14.5 4.484 14.5 4q0-2.25-2.25-2.25M11 12.25h2q2.25 0 2.25 2.25v2q0 2.25-2.25 2.25h-2q-2.25 0-2.25-2.25v-2q0-2.25 2.25-2.25");
}
</style><path class="zrn552b_e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:spirits-bottle"} {...others} />);
}

export default Component;
