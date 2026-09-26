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

.trjkit8hc {
  d: path("M4 10L4 14M12 3L12 21M20 10L20 14");
}

.zdn9vqbnn {
  stroke-opacity: 0.4;
  d: path("M8 6L8 18M16 7L16 17");
}
</style><g class="nrj6p8qat"><path class="zdn9vqbnn"/><path class="trjkit8hc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:audio-lines-duotone"} {...others} />);
}

export default Component;
