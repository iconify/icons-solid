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

.uhjunhzrf {
  d: path("M12 2.5za2 2 0 0 1 2 2v2a2 2 0 0 1-2 2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2");
}

.xu0zgacbu {
  d: path("M8 6.5a4 4 0 0 0 8 0m-11.25 7a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 1 1 0-3.5m-2.5 8.25c0-1.25 1-2 2.5-2s2.5.75 2.5 2M12 13.5a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 1 1 0-3.5m-2.5 8.25c0-1.25 1-2 2.5-2s2.5.75 2.5 2m4.75-8.25a1.75 1.75 0 1 1 0 3.5a1.75 1.75 0 1 1 0-3.5m-2.5 8.25c0-1.25 1-2 2.5-2s2.5.75 2.5 2");
}
</style><g class="hntgybcog"><path class="uhjunhzrf"/><path class="xu0zgacbu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:a-cappella"} {...others} />);
}

export default Component;
