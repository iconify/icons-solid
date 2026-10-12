import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b5g6cpb9d {
  cx: 12px;
  cy: 5.25px;
  r: 2.25px;
}

.ii3j1qnxb {
  d: path("M7.5 13.25h9v6.5h-9zm4.5 0v2.5");
}

.jr3swaciy {
  d: path("M4.75 21.25V10.5h14.5v10.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="b5g6cpb9d"/><path class="jr3swaciy"/><path class="ii3j1qnxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:carrying-box-sharp"} {...others} />);
}

export default Component;
