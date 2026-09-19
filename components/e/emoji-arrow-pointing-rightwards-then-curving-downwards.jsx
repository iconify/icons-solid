import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.chly6cb2g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.587 42.5V20.431c0-8.246-6.685-14.931-14.932-14.931h-4.2");
}

.fiqf34ggw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m18.629 32.542l9.958 9.958l9.958-9.958");
}
</style><path class="fiqf34ggw"/><path class="chly6cb2g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:emoji-arrow-pointing-rightwards-then-curving-downwards"} {...others} />);
}

export default Component;
