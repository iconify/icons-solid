import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.eucol4b-l {
  d: path("M28.662 11.167a16.503 16.503 0 1 1-9.016-.088");
}

.s8ud4iiwq {
  d: path("M24.004 4.5h.096v25.18h-.096z");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="eucol4b-l"/><path class="s8ud4iiwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:wake-on-lan"} {...others} />);
}

export default Component;
