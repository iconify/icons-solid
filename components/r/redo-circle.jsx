import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bki_fti6o {
  d: path("M19.75 9.25h-10a5.5 5.5 0 0 0 0 11H14");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kmps77u7k {
  d: path("m15.75 5.25l4 4l-4 4");
}
</style><g class="hntgybcog"><path class="bki_fti6o"/><path class="kmps77u7k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:redo-circle"} {...others} />);
}

export default Component;
