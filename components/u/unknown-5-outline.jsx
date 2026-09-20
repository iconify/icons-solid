import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m0pmlf7oa {
  fill: currentColor;
  d: path("M4 12v-2h8v2zm8 10q-2 0-3.838-.737T4.9 19.1l1.4-1.4q1.175 1.1 2.65 1.7T12 20q3.325 0 5.663-2.337T20 12t-2.337-5.663T12 4V2q2.075 0 3.888.788t3.174 2.15t2.15 3.175t.788 3.875t-.787 3.887t-2.15 3.188t-3.175 2.15T12 22");
}
</style><path class="m0pmlf7oa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:unknown-5-outline"} {...others} />);
}

export default Component;
