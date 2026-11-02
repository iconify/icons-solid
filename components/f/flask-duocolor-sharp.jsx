import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jwhffieal {
  d: path("M10 3v6L4 21h16L14 9V3M8 3h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tlzu35bzk {
  stroke-opacity: 0.4;
  d: path("M7 15h10");
}
</style><g class="nrj6p8qat"><path class="tlzu35bzk"/><path class="jwhffieal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:flask-duocolor-sharp"} {...others} />);
}

export default Component;
