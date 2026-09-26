import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lf8uiic0i {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1C18.0751 1 23 5.9249 23 12C23 12.5523 22.5523 13 22 13H16C14.3431 13 13 14.3431 13 16V22C13 22.5523 12.5523 23 12 23C5.9249 23 1 18.0751 1 12C1 5.9249 5.9249 1 12 1ZM11 6V12C11 12.5523 11.4477 13 12 13H17C17.5523 13 18 12.5523 18 12C18 11.4477 17.5523 11 17 11H13V6C13 5.4477 12.5523 5 12 5C11.4477 5 11 5.4477 11 6Z");
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y6ufr8bwa {
  d: path("M16 19L18 21L22 17");
}
</style><g class="nrj6p8qat"><path clip-rule="evenodd" class="lf8uiic0i"/><path class="y6ufr8bwa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:clock-check-fill"} {...others} />);
}

export default Component;
