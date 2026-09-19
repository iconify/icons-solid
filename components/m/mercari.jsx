import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ig6bo0f4q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M8.154 43.5V14.991L22.408 43.5l14.255-28.509V43.5M33.3 9.663L34.684 4.5l5.164 1.383l-1.384 5.164z");
}
</style><path class="ig6bo0f4q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:mercari"} {...others} />);
}

export default Component;
