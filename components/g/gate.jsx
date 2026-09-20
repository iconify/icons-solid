import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jty3bjblr {
  fill: currentColor;
  d: path("M5 19V9q0-1.65 1.175-2.825T9 5h2v6H9v2h2v6zm8 0v-6h2v-2h-2V5h2q1.65 0 2.825 1.175T19 9v10zM2 17V7h2v10zm18 0V7h2v10z");
}
</style><path class="jty3bjblr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:gate"} {...others} />);
}

export default Component;
