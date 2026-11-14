import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bfwiu2w4e {
  d: path("m8.5 5.5l-4 4l4 4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vzmnvky3g {
  d: path("M4.5 9.5h10a5 5 0 0 1 0 10H9");
}
</style><g class="hntgybcog"><path class="vzmnvky3g"/><path class="bfwiu2w4e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:undo"} {...others} />);
}

export default Component;
