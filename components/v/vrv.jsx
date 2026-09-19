import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ig5xlubfw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.818 44.633L5.84 34.308l.088-20.5L23.994 3.633L41.973 13.96l-.088 20.5Z");
}

.ls99_u76q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m9.883 28.072l14.273 8.24L39.1 27.685");
}
</style><path class="ig5xlubfw"/><path class="ls99_u76q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:vrv"} {...others} />);
}

export default Component;
