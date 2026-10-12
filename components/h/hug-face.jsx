import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k8gzv6bze {
  cx: 12px;
  cy: 10.5px;
  r: 7px;
}

.p-9vxjb_l {
  d: path("M8.5 9c.55-.7 1.7-.7 2.25 0m2.5 0c.55-.7 1.7-.7 2.25 0m-5.75 3.75q.975.9 2.25.9c1.275 0 1.6-.3 2.25-.9M2.75 15.5A10.5 10.5 0 0 0 7.56 20m13.69-4.5a10.5 10.5 0 0 1-4.81 4.5");
}
</style><g class="hntgybcog"><circle class="k8gzv6bze"/><path class="p-9vxjb_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:hug-face"} {...others} />);
}

export default Component;
