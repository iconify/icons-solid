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

.vrxvccc3q {
  d: path("M11.5301 7.77326L7.06842 15.7107C6.86937 16.0648 7.12844 16.5 7.5383 16.5H16.4617C16.8716 16.5 17.1306 16.0648 16.9316 15.7107L12.4699 7.77326C12.2651 7.40891 11.7349 7.40891 11.5301 7.77326Z");
}
</style><g class="nrj6p8qat"><path class="cc50cvs0o"/><path class="vrxvccc3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-caret-up"} {...others} />);
}

export default Component;
