import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sn0i64bol {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M3.04 5.27q-1.2 2.4 1.052 3.859q.074.049.158.078V19q0 2.75 2.75 2.75h7q2.75 0 2.75-2.75v-.25H18q2.75 0 2.75-2.75v-3q0-2.75-2.75-2.75h-1.25V9.207q.116-.041.213-.117t.164-.179q1.785-2.721-.516-5.022q-2.021-2.02-4.365-.89q-1.159-1.504-3.229-1.316q-2.094.191-2.959 1.915Q4.067 3.217 3.04 5.27m13.71 6.48H18q1.25 0 1.25 1.25v3q0 1.25-1.25 1.25h-1.25zM15.25 18v1q0 1.25-1.25 1.25H7q-1.25 0-1.25-1.25V9.25h9.5z");
}
</style><path class="sn0i64bol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:inn-tavern"} {...others} />);
}

export default Component;
