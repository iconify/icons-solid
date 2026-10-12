import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tzvmh1l8q {
  d: path("M2.75 21.25V11a9.25 7.25 0 0 1 18.5 0v10.25Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zqk0_sb3k {
  d: path("M5.75 21.25v-6h5v6m2.5 0v-6h5v6M9.5 8h5v2.5h-5z");
}
</style><g class="x2cwu0gfd"><path class="tzvmh1l8q"/><path class="zqk0_sb3k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:warehouse-building-sharp"} {...others} />);
}

export default Component;
