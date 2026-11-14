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

.ixau_rbxc {
  d: path("M9 15.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.v7cqfu6wv {
  d: path("M12 4c2.5 0 3.5 2.5 4.5 5s3 4 3 7a7.5 5.5 0 0 1-15 0c0-3 2-4.5 3-7s2-5 4.5-5m0 0l1.25-1.75");
}
</style><g class="hntgybcog"><path class="v7cqfu6wv"/><path class="ixau_rbxc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:avocado-whole"} {...others} />);
}

export default Component;
