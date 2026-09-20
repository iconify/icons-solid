import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.arox4o3qw {
  d: path("m5 12 8 -8 4 4 -8 8Z");
}

.gv5aqrbwu {
  d: path("M7 21h8");
}

.ik6mh31gy {
  d: path("M11 14v7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="arox4o3qw"/><path class="ik6mh31gy"/><path class="gv5aqrbwu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:astronomy-outline-regular"} {...others} />);
}

export default Component;
