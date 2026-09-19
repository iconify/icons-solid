import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.dfcdh9g5e {
  cx: 8.498px;
  cy: 24px;
  r: 4.998px;
}

.rdnad88be {
  d: path("M19.154 19.269v9.462m4.464-9.462v9.462m4.462-9.462v9.462m16.42-.069H33.733l5.383-9.503z");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="dfcdh9g5e"/><path class="rdnad88be"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:dimensional"} {...others} />);
}

export default Component;
