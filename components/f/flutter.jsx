import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ghm8osbtm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.592 38.574l16.859-16.045H27.768L16.75 33.014L27.768 43.5h11.683L28.433 33.014M7.636 24.34l5.94 5.654L40.364 4.5H28.681z");
}
</style><path class="ghm8osbtm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:flutter"} {...others} />);
}

export default Component;
