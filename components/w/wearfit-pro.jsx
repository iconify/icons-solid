import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.dgs2scptx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 13.965v5.638a1.089 1.089 0 1 1-2.177 0v-7.496a1.089 1.089 0 1 0-2.176 0v13.688a1.089 1.089 0 1 1-2.177 0V9.465a1.089 1.089 0 1 0-2.176 0v21.21a1.089 1.089 0 1 1-2.177 0V11.533a1.089 1.089 0 1 0-2.176 0v23.504a1.089 1.089 0 1 1-2.176 0V14.418a1.089 1.089 0 1 0-2.177 0v24.116a1.089 1.089 0 1 1-2.176 0V14.418a1.089 1.089 0 1 0-2.177 0v20.619a1.089 1.089 0 1 1-2.176 0V11.532a1.089 1.089 0 1 0-2.176 0v19.145a1.089 1.089 0 1 1-2.177 0V9.467a1.089 1.089 0 1 0-2.176 0v16.328a1.089 1.089 0 1 1-2.177 0V12.106a1.089 1.089 0 1 0-2.176 0v7.496a1.089 1.089 0 1 1-2.176 0v-5.638");
}
</style><path class="dgs2scptx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:wearfit-pro"} {...others} />);
}

export default Component;
