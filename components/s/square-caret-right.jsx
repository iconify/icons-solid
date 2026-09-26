import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cc50cvs0o {
  d: path("M6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34315 4.34315 3 6 3Z");
}

.lcgw33bfr {
  d: path("M16.2267 12.4699L8.28926 16.9316C7.93516 17.1306 7.5 16.8716 7.5 16.4617L7.5 7.5383C7.5 7.12844 7.93516 6.86937 8.28926 7.06842L16.2267 11.5301C16.5911 11.7349 16.5911 12.2651 16.2267 12.4699Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="cc50cvs0o"/><path class="lcgw33bfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-caret-right"} {...others} />);
}

export default Component;
