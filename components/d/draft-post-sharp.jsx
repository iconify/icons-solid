import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nmhvddcyu {
  d: path("M2.75 2.75h14.5v18.5H2.75zM6.5 7.5h7m-7 3.5h7m-7 3.5h3");
}

.q7qnnfbeo {
  d: path("m18.25 9l1.238-.999l2.25 2.25l-1.238.999l-6.5 6.5l-3 .75l.75-3Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="nmhvddcyu"/><path class="q7qnnfbeo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:draft-post-sharp"} {...others} />);
}

export default Component;
