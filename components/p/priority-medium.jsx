import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fkktr7nwe {
  fill: currentColor;
  d: path("M4.75 14zA2.25 2.25 0 0 1 7 16.25v1.5A2.25 2.25 0 0 1 4.75 20a2.25 2.25 0 0 1-2.25-2.25v-1.5A2.25 2.25 0 0 1 4.75 14M12 9za2.25 2.25 0 0 1 2.25 2.25v6.5A2.25 2.25 0 0 1 12 20a2.25 2.25 0 0 1-2.25-2.25v-6.5A2.25 2.25 0 0 1 12 9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o6g1yobuw {
  d: path("M19.25 4za2.25 2.25 0 0 1 2.25 2.25v11.5A2.25 2.25 0 0 1 19.25 20A2.25 2.25 0 0 1 17 17.75V6.25A2.25 2.25 0 0 1 19.25 4");
}
</style><g class="hntgybcog"><path class="fkktr7nwe"/><path class="o6g1yobuw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:priority-medium"} {...others} />);
}

export default Component;
