import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zhzc68msg {
  fill: currentColor;
  d: path("M4.025 17L.4 13.475l1-1.025q2.125-2.275 4.938-3.362T12 8t5.638 1.1t4.962 3.35l1 1.025L19.975 17L16 14v-3.35q-.95-.3-1.95-.475T12 10t-2.05.175T8 10.65V14zM6 11.45q-.725.375-1.4.863T3.2 13.4l1 1L6 13zm12 .05V13l1.8 1.4l1-.95q-.725-.65-1.4-1.125T18 11.5m0 0");
}
</style><path class="zhzc68msg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:call-end-outline-sharp"} {...others} />);
}

export default Component;
