import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iq8tuac7e {
  d: path("m10 11.5 4 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w3hyiobto {
  d: path("M3 6h10l8 8 -8 8H3Z");
}

.wo_mlccql {
  d: path("m14 11.5 -4 4");
}
</style><g class="nrj6p8qat"><path class="w3hyiobto"/><path class="iq8tuac7e"/><path class="wo_mlccql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:label-removed-outline-regular"} {...others} />);
}

export default Component;
