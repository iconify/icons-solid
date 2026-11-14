import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dshzgdbla {
  d: path("M6.5 3h11A3.5 3.5 0 0 1 21 6.5v11a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 17.5v-11A3.5 3.5 0 0 1 6.5 3M12 3v18m-9-9h18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vo6j-p68v {
  d: path("M16 15.75h1a1.5 1.5 0 0 1 1.5 1.5v2.25A1.5 1.5 0 0 1 17 21h-1a1.5 1.5 0 0 1-1.5-1.5v-2.25a1.5 1.5 0 0 1 1.5-1.5");
}
</style><g class="hntgybcog"><path class="dshzgdbla"/><path class="vo6j-p68v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cubby-shelves"} {...others} />);
}

export default Component;
