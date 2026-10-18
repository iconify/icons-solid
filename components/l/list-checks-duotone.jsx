import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kcg4zobos {
  d: path("M2 7L4 9L8 5M2 17L4 19L8 15");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xdcgmbvng {
  stroke-opacity: 0.4;
  d: path("M12 7L22 7M12 17L22 17");
}
</style><g class="nrj6p8qat"><path class="xdcgmbvng"/><path class="kcg4zobos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:list-checks-duotone"} {...others} />);
}

export default Component;
