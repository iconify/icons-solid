import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.a444elp8k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 33.26v2.02c0 3.99-3.23 7.22-7.22 7.22H12.72c-3.99 0-7.22-3.23-7.22-7.22V12.72c0-3.99 3.23-7.22 7.22-7.22H24v20.49a7.27 7.27 0 0 0 7.27 7.27z");
}

.y48qwuo3c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 12.72v11.43h-9.14V5.5h1.92c3.99 0 7.22 3.23 7.22 7.22");
}
</style><path class="a444elp8k"/><path class="y48qwuo3c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:librus"} {...others} />);
}

export default Component;
