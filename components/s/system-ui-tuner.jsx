import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fnlo-83dm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.75 4.5h-15.5a2 2 0 0 0-2 2v35a2 2 0 0 0 2 2h15.5a2 2 0 0 0 2-2v-35a2 2 0 0 0-2-2M23.91 11l-2.07 2.07a2.93 2.93 0 1 0 4.14 0Zm0 .04v7.08");
}
</style><path class="fnlo-83dm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:system-ui-tuner"} {...others} />);
}

export default Component;
