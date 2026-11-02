import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mctii3_jr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 20H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h12l4 4v5a2 2 0 0 1-2 2zm-9-4h18M11 9v7M3 4h18M7 4v5m8-5v5");
}
</style><path class="mctii3_jr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:suspension-railway"} {...others} />);
}

export default Component;
