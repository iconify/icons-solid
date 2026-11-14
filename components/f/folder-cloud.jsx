import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b0yht9mit {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M5 4.25Q2.25 4.25 2.25 7v10q0 2.75 2.75 2.75h14q2.75 0 2.75-2.75V9q0-2.75-2.75-2.75h-7.189L10.03 4.47q-.105-.106-.243-.163T9.5 4.25zm5 12.5q-2.5 0-2.5-2.5q0-2.261 2.044-2.477q.984-1.582 2.966-1.362q1.969.219 2.586 1.958q1.725.518 1.394 2.504q-.368 2.208-2.549 1.877z");
}
</style><path class="b0yht9mit"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:folder-cloud"} {...others} />);
}

export default Component;
