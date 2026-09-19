import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.nif4mac9s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.566 9.467c0 16.053-13.013 29.066-29.066 29.066L26.35 9.467zm1.972 0H43.5v29.066H30.735c4.922-9.998 4.803-29.066 4.803-29.066");
}
</style><path class="nif4mac9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ayvens"} {...others} />);
}

export default Component;
