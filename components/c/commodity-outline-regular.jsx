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

.uhf5s-b6r {
  d: path("m5 11 4.5 -4.5h5L19 11Z");
}

.v0b-4fwch {
  d: path("m2 19 5 -5h10l5 5Z");
}
</style><g class="nrj6p8qat"><path class="v0b-4fwch"/><path class="uhf5s-b6r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:commodity-outline-regular"} {...others} />);
}

export default Component;
