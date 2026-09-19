import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bifw_qbay {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.943 9.198v29.245c0 4.304 3.676 4.853 6.574 3.11l20.106-12.089c7.257-4.363 7.266-6.506-.096-10.902l-21.1-12.603c-1.557-.93-5.484-.61-5.484 3.239m26.584 9.364l.096 10.902M8.943 15.419l31.962 7.805m-.075 1.816L8.943 32.8");
}
</style><path class="bifw_qbay"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:yeolpumta"} {...others} />);
}

export default Component;
