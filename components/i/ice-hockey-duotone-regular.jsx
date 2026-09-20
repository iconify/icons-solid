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

.oiqkce4vb {
  d: path("M13 5h6v4h-6Z");
}

.quuk74b3k {
  fill: currentColor;
  d: path("M13 5h6v4h-6Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.rmcfrrb-t {
  d: path("M6 3v12c0 3 2 4 5 4h6");
}
</style><g class="nrj6p8qat"><path class="quuk74b3k"/><path class="rmcfrrb-t"/><path class="oiqkce4vb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:ice-hockey-duotone-regular"} {...others} />);
}

export default Component;
