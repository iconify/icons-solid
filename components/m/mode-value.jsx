import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uhqo9yw4a {
  fill: currentColor;
  d: path("M12.75 19.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m0-4a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m0-4a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m0-4a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m0-4a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.ypwke6hjb {
  d: path("M3 19.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0-4a1 1 0 1 0 2 0a1 1 0 1 0-2 0m5 4a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0-4a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0-4a1 1 0 1 0 2 0a1 1 0 1 0-2 0m10.5 8a1 1 0 1 0 2 0a1 1 0 1 0-2 0m0-4a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}
</style><g class="hntgybcog"><path class="uhqo9yw4a"/><path class="ypwke6hjb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:mode-value"} {...others} />);
}

export default Component;
