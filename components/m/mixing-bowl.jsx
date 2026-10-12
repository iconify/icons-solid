import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yhuleibtn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75v3.5m-2.25 6c-1-2.25-.25-5 2.25-6c2.5 1 3.25 3.75 2.25 6m-10 0h15.5c-.5 5-3.5 8.5-7.75 8.5s-7.25-3.5-7.75-8.5m-1.5 0h18.5");
}
</style><path class="yhuleibtn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:mixing-bowl"} {...others} />);
}

export default Component;
