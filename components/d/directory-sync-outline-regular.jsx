import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bn_pu6j-z {
  d: path("M20 7v13H4V4h5l3 3h4");
}

.exc56819n {
  d: path("m13 13.5 2.5 2.5 2.5 -2.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.v9y21sbft {
  d: path("M8.5 16v-5h7v5");
}
</style><g class="nrj6p8qat"><path class="bn_pu6j-z"/><path class="v9y21sbft"/><path class="exc56819n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:directory-sync-outline-regular"} {...others} />);
}

export default Component;
