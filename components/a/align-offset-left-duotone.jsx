import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.edk05ab4u {
  stroke-opacity: 0.4;
  d: path("M12 2L12 20M20 10L20 22");
}

.lgp-8qlsy {
  d: path("M4 2L4 8");
}

.to0c2ub7t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="to0c2ub7t"><path class="edk05ab4u"/><path class="lgp-8qlsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:align-offset-left-duotone"} {...others} />);
}

export default Component;
