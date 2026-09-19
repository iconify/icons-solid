import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.c0vcnmkqb {
  cx: 38px;
  cy: 10.25px;
  r: 4.25px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.uqwprnb6j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 5.5C13.783 5.5 5.5 13.783 5.5 24S13.783 42.5 24 42.5S42.5 34.217 42.5 24v-6H34v6c0 5.523-4.477 10-10 10s-10-4.477-10-10s4.477-10 10-10h6V5.5z");
}
</style><path class="uqwprnb6j"/><circle class="c0vcnmkqb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:uds"} {...others} />);
}

export default Component;
