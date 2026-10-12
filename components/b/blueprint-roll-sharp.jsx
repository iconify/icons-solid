import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i5lu8dbkg {
  d: path("M8 13h4v5m0-2.5h4");
}

.rfrbhpb2m {
  d: path("M2.75 4.75h18.5v5H2.75zm2.5 0v5m-.25 0h14v11.5H5v-2Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="rfrbhpb2m"/><path class="i5lu8dbkg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:blueprint-roll-sharp"} {...others} />);
}

export default Component;
