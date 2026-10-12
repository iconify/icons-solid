import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.br1by-bfe {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 18.25h5.5");
}

.j7vio8fah {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 14.25h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.xdoqyybfh {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 10.25v-6.5h14.5v6.5ZM10.5 7h3m-8.75 3.25h14.5v11H4.75v-2Z");
}
</style><g class="ux2u0rbkq"><path class="xdoqyybfh"/><path class="j7vio8fah"/><path class="br1by-bfe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:visitor-pass-sharp"} {...others} />);
}

export default Component;
