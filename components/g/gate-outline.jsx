import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jafur8bvs {
  fill: currentColor;
  d: path("M2 17V7h2v10zm3 2V9q0-1.65 1.175-2.825T9 5h6q1.65 0 2.825 1.175T19 9v10zm15-2V7h2v10zM7 17h4v-4H9v-2h2V7H9q-.825 0-1.412.588T7 9zm6 0h4V9q0-.825-.587-1.412T15 7h-2v4h2v2h-2z");
}
</style><path class="jafur8bvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:gate-outline"} {...others} />);
}

export default Component;
