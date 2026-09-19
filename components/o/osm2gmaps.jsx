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

.jed_d_3ri {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5v43M2.5 24h43M5.38 13.25h37.24M5.38 34.751h37.24M13.25 24c0-8.307 4.104-16.516 10.75-21.5C30.646 7.484 34.75 15.693 34.75 24S30.646 40.516 24 45.5C17.354 40.516 13.25 32.307 13.25 24");
}
</style><circle class="cpk0fnbgt"/><path class="jed_d_3ri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:osm2gmaps"} {...others} />);
}

export default Component;
