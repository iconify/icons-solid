import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dzozkebzt {
  d: path("M12 5.5v-3h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xj5iijben {
  d: path("M5 10.5a7 5 0 0 1 14 0Zm1 0L7.5 21h9L18 10.5");
}
</style><g class="hntgybcog"><path class="xj5iijben"/><path class="dzozkebzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:slush-drink"} {...others} />);
}

export default Component;
