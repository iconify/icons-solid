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

.ozz3b7beu {
  d: path("M3 20.5V5l2.5-2l2 2L10 2.5l2.5 2l2.5-1L17 7l2-.5l2 3v11");
}

.rf19nsq3l {
  d: path("M9.5 17v-4.5A5 5 0 0 1 12 8a5 5 0 0 1 2.5 4.5V17Zm-7 3.5h19");
}
</style><g class="hntgybcog"><path class="ozz3b7beu"/><path class="rf19nsq3l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:abbey-ruins"} {...others} />);
}

export default Component;
