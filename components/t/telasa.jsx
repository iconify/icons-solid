import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.w31p03zxw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 27.128a11 11 0 0 1 10.395 7.401L24 4.5L13.605 34.53A11 11 0 0 1 24 27.127zM10.5 43.5l1.553-4.486m23.894 0L37.5 43.5");
}
</style><path class="w31p03zxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:telasa"} {...others} />);
}

export default Component;
