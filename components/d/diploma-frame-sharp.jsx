import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ks4ug93ki {
  d: path("m9.5 4.75l2.5-2l2.5 2m-10.75 0h16.5v16.5H3.75z");
}

.ta11q7b_l {
  d: path("M8.25 8.25h8.5v9.5h-9.5v-9.5zm1.5 3.25h4.5m-4.5 3h2.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ks4ug93ki"/><path class="ta11q7b_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:diploma-frame-sharp"} {...others} />);
}

export default Component;
