import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.q3wpe2cqz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.79 14.25H14.44a9.16 9.16 0 0 0-9.16 9.16a9.3 9.3 0 0 0 .23 2.06");
}

.q6opo-b3d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m4.5 33.75l9.71 7.93V25.83zm9.71 0h19.35a9.16 9.16 0 0 0 9.16-9.16a9.3 9.3 0 0 0-.23-2.06m1.01-8.28l-9.71-7.93v15.85z");
}
</style><path class="q6opo-b3d"/><path class="q3wpe2cqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:turingmachine"} {...others} />);
}

export default Component;
