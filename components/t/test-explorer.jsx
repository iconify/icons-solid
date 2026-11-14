import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cf8no9b5g {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M2.25 7q0-2.75 2.75-2.75h4.5q.149 0 .287.057t.243.163l1.781 1.78H19q2.75 0 2.75 2.75v8q0 2.75-2.75 2.75H5q-2.75 0-2.75-2.75zM11 8q-3.75 0-3.75 3.75T11 15.5q1.164 0 2.073-.617l1.897 1.897q.105.106.243.163T15.5 17t.287-.057t.243-.163q.106-.105.163-.243t.057-.287t-.057-.287t-.163-.243l-1.897-1.897q.617-.909.617-2.073q0-1.553-1.098-2.652Q12.553 8 11 8");
}
</style><path class="cf8no9b5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:test-explorer"} {...others} />);
}

export default Component;
