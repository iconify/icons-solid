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

.r-dl5xbrt {
  stroke-opacity: 0.4;
  d: path("M15 17L18 17C19.6569 17 21 15.6569 21 14L21 6C21 4.3431 19.6569 3 18 3L10 3C8.3431 3 7 4.3431 7 6L7 9");
}

.wtnju7bla {
  d: path("M11 13L3.5 20.5M11 21L3.5 21C3.2239 21 3 20.7761 3 20.5L3 13");
}
</style><g class="nrj6p8qat"><path class="r-dl5xbrt"/><path class="wtnju7bla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-arrow-out-down-left-duotone"} {...others} />);
}

export default Component;
