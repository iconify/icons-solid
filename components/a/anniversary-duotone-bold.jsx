import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a3wmb4ndd {
  d: path("M12 17c-3 -2 -7 -4.5 -5.5 -7.5 1.5 -2 4 -1 5.5 1 1.5 -2 4 -3 5.5 -1C19 12.5 15 15 12 17");
}

.a86gg4zyi {
  d: path("M4 12a8 8 0 1 1 4 7");
}

.fia0lccfm {
  fill: currentColor;
  d: path("M12 17c-3 -2 -7 -4.5 -5.5 -7.5 1.5 -2 4 -1 5.5 1 1.5 -2 4 -3 5.5 -1C19 12.5 15 15 12 17");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.m2xj7dbwz {
  d: path("m2 10 2 2 2 -2");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="fia0lccfm"/><path class="a3wmb4ndd"/><path class="a86gg4zyi"/><path class="m2xj7dbwz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:anniversary-duotone-bold"} {...others} />);
}

export default Component;
