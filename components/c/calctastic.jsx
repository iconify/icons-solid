import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bugdvbbkr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M10.409 36.409h27.182V43.5H10.409zm27.182-21.864H27.545V4.5h-7.09v10.045H10.409v7.091h10.046v10.046h7.09V21.636h10.046z");
}
</style><path class="bugdvbbkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:calctastic"} {...others} />);
}

export default Component;
