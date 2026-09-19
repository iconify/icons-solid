import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.tts_vfbse {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M22.68 15.457c0 4.747-3.846 8.597-8.59 8.597h0c-4.744 0-8.59-3.85-8.59-8.597h0c0-4.748 3.845-8.598 8.589-8.598h.001c4.744 0 8.59 3.849 8.59 8.597zm-.05-.901l19.87-2.797m-5.382.758l.812 5.778M17.019 34.701l6.434 6.44l11.56-11.569");
}
</style><path class="tts_vfbse"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:key-attestation"} {...others} />);
}

export default Component;
