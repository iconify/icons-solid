import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a_rbte9xg {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M17 5.25q-3.08 0-5 2.609Q10.08 5.25 7 5.25q-2.395 0-3.892 2.095Q1.75 9.247 1.75 12t1.358 4.655Q4.605 18.75 7 18.75q3.08 0 5-2.609q1.92 2.609 5 2.609q2.395 0 3.892-2.095Q22.25 14.753 22.25 12t-1.358-4.655Q19.395 5.25 17 5.25m-10 4q2.75 0 2.75 2.75T7 14.75T4.25 12T7 9.25M14.25 12q0-2.75 2.75-2.75T19.75 12T17 14.75T14.25 12");
}
</style><path class="a_rbte9xg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:cell-division"} {...others} />);
}

export default Component;
