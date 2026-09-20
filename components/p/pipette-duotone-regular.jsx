import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ac5nw33zc {
  d: path("M9 6a3 3 0 0 1 6 0");
}

.aut-6nhkz {
  d: path("M9 6h6v9l-3 3 -3 -3Z");
}

.l9fyn0ypz {
  fill: currentColor;
  d: path("M9 6h6v9l-3 3 -3 -3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pt-3kkb2k {
  d: path("M9 11h6");
}
</style><g class="nrj6p8qat"><path class="l9fyn0ypz"/><path class="aut-6nhkz"/><path class="ac5nw33zc"/><path class="pt-3kkb2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:pipette-duotone-regular"} {...others} />);
}

export default Component;
