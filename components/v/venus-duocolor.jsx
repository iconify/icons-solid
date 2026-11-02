import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t6r1jgw6n {
  stroke-opacity: 0.4;
  d: path("M12 13v8m-3-4h6");
}

.vco3hvbdw {
  d: path("M7 8a5 5 0 1 0 10 0A5 5 0 0 0 7 8");
}
</style><g class="nrj6p8qat"><path class="t6r1jgw6n"/><path class="vco3hvbdw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:venus-duocolor"} {...others} />);
}

export default Component;
