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

.k7h925p5o {
  d: path("M4.5 2.5h15a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H10L6 21v-3.5H4.5a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2");
}

.v9fx87bkk {
  d: path("M12.75 5.25v2h2");
}

.vi1vaabuj {
  d: path("M9.25 5.25h3.5l2 2v7.5h-5.5Z");
}
</style><g class="hntgybcog"><path class="k7h925p5o"/><path class="vi1vaabuj"/><path class="v9fx87bkk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:claim-chat"} {...others} />);
}

export default Component;
