import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jbc81qqnm {
  fill: currentColor;
  d: path("M18.2 21q-2.702 0-5.418-1.244t-5.005-3.533q-2.27-2.289-3.523-5.021Q3 8.469 3 5.8V5h4.439l.848 4.083l-2.697 2.51q.685 1.186 1.418 2.167t1.527 1.769q.802.84 1.808 1.57t2.296 1.44l2.611-2.708l3.75.756V21zM12 4V3h9v1zm0 3.385v-1h9v1zm0 3.384v-1h9v1z");
}
</style><path class="jbc81qqnm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:call-log-sharp"} {...others} />);
}

export default Component;
