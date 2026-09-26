import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bvpe1-nac {
  d: path("M16 20L22 20");
}

.ly67rybbe {
  stroke-opacity: 0.4;
  d: path("M2 4L14 4M4 12L22 12");
}

.to0c2ub7t {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="to0c2ub7t"><path class="ly67rybbe"/><path class="bvpe1-nac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:align-offset-top-two-tone"} {...others} />);
}

export default Component;
