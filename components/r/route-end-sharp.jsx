import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aldfehmne {
  cx: 4.75px;
  cy: 19px;
  r: 2px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zfeak6k6r {
  d: path("M6.75 19H16V7.75m.68-4.68l3.89 1.86l.68.32l-.68.32l-3.89 1.86l-.68.32v-5z");
}
</style><g class="x2cwu0gfd"><circle class="aldfehmne"/><path class="zfeak6k6r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:route-end-sharp"} {...others} />);
}

export default Component;
