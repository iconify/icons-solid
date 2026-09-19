import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.g1_a_bb8n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.6 9.54v2.11H6.29a1.79 1.79 0 0 0-1.79 1.79h0v23.23a1.79 1.79 0 0 0 1.79 1.79h35.42a1.79 1.79 0 0 0 1.79-1.79h0V13.45a1.8 1.8 0 0 0-1.79-1.8H16.39V9.54ZM24 17.75a8.52 8.52 0 1 1-8.51 8.51A8.51 8.51 0 0 1 24 17.75");
}
</style><path class="g1_a_bb8n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:google-camera"} {...others} />);
}

export default Component;
