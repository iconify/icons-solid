import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a4oza3fug {
  d: path("M3 4v16");
}

.gg6jr8oaf {
  d: path("M21 4v16");
}

.h3yzlbw2w {
  d: path("M14 10a2 2 0 0 1 2 -2 2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2 2 2 0 0 1 -2 -2Z");
}

.jlsc9oajw {
  d: path("M6 10a2 2 0 0 1 2 -2 2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2 2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="a4oza3fug"/><path class="gg6jr8oaf"/><path class="jlsc9oajw"/><path class="h3yzlbw2w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:distribute-outline-regular"} {...others} />);
}

export default Component;
