import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.dhj9xibzb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M17.747 19.456h4.005c4.144 0 6.906 2.366 7.422 6.345L31.467 43.5H20.863z");
}

.zuaq0ibnx {
  cx: 22.248px;
  cy: 10.214px;
  r: 5.715px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="zuaq0ibnx"/><path class="dhj9xibzb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:itel-launcher"} {...others} />);
}

export default Component;
