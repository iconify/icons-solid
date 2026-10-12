import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ct9w9mblk {
  d: path("M8 10.25v-3.5a4 4 0 0 1 8 0v.5m-11.25 3h14.5v11H4.75z");
}

.fknzpccmd {
  d: path("m12.5 12.75l-1.75 2.75l2.5 1.5l-1.75 2.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ct9w9mblk"/><path class="fknzpccmd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:jailbreak-lock-sharp"} {...others} />);
}

export default Component;
