import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.i0wso2blw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m29.551 33.884l.312-.37l3.146-7.392l-.004-.482l-1.32-1.377l1.096-8.519l-.282-.282l-1.974.592h-.296l2.267-4.94V10.5a3457 3457 0 0 1-16.697 6.151l-.179.134l.926 7.434l-1.555 1.554l4.488 11.205l.323.522l.84-.34z");
}
</style><path class="i0wso2blw"/><circle class="cpk0fnbgt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:boardgamegeek"} {...others} />);
}

export default Component;
