import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d_robbd0l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 11V9.75a3 3 0 0 1 3-3h12.5m-3-3l3 3l-3 3m2 3.25v1.25a3 3 0 0 1-3 3H3.75m3 3l-3-3l3-3m4.5-3.5l1-.75v4.5");
}
</style><path class="d_robbd0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:repeat-one"} {...others} />);
}

export default Component;
