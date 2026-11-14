import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f_b_70b3m {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M8.75 2.25h.5q2.25 0 2.25 2.25V5q0 1.984-1.75 2.219v6.031h7.031Q17.016 11.5 19 11.5h.5q2.25 0 2.25 2.25v.5q0 2.25-2.25 2.25H19q-1.984 0-2.219-1.75h-7.47l-2.968 2.968q.157.437.157 1.032V19q0 2.25-2.25 2.25H4q-2.25 0-2.25-2.25v-.25q0-2.25 2.25-2.25h.25q.595 0 1.032.157l2.968-2.968v-6.47Q6.5 6.984 6.5 5v-.5q0-2.25 2.25-2.25");
}
</style><path class="f_b_70b3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:gizmo-scale"} {...others} />);
}

export default Component;
