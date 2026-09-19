import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ch4v-keab {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.78 11.1L4.45 24l13.33 13.32L31.11 24Zm5.82 20.4l6.66 6.1L43.46 24l-13.2-12.9l-6.41 5.9");
}
</style><path class="ch4v-keab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:anydesk"} {...others} />);
}

export default Component;
