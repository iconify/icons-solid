import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fg8whccal {
  cx: 34.708px;
  cy: 34.492px;
  r: 7.792px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ul4_m6cqi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.084 34.492V5.716m5.832 28.776V14.465");
}

.vn93xx72a {
  cx: 13.292px;
  cy: 34.492px;
  r: 7.792px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="vn93xx72a"/><circle class="fg8whccal"/><path class="ul4_m6cqi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:sbt-direct"} {...others} />);
}

export default Component;
