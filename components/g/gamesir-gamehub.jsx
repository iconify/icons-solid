import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bd-880z-u {
  cx: 27.25px;
  cy: 24px;
  r: 1.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.om55k8b9c {
  cx: 32.75px;
  cy: 24px;
  r: 1.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.tqhifrbbu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.094 10.594L4.5 24l6.25 9.75h17m7.156 3.656L43.5 24l-6.25-9.75h-17m-4.45 7.281v4.938M18.269 24h-4.937");
}
</style><circle class="bd-880z-u"/><circle class="om55k8b9c"/><path class="tqhifrbbu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:gamesir-gamehub"} {...others} />);
}

export default Component;
