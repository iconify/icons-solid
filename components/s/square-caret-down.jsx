import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cc50cvs0o {
  d: path("M6 3H18C19.6569 3 21 4.34315 21 6V18C21 19.6569 19.6569 21 18 21H6C4.34315 21 3 19.6569 3 18V6C3 4.34315 4.34315 3 6 3Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rw9mkhbsl {
  d: path("M11.5301 16.2267L7.06842 8.28926C6.86937 7.93516 7.12844 7.5 7.5383 7.5H16.4617C16.8716 7.5 17.1306 7.93516 16.9316 8.28926L12.4699 16.2267C12.2651 16.5911 11.7349 16.5911 11.5301 16.2267Z");
}
</style><g class="nrj6p8qat"><path class="cc50cvs0o"/><path class="rw9mkhbsl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-caret-down"} {...others} />);
}

export default Component;
