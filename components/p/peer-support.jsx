import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ar8m_2b3o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.5 6.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0m9 11c0-3.25-2.5-5.25-6-5.25c-.75 0-1.5.1-2 .25m-8.25-2a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m-2.75 11C2.5 18 4.75 16 8 16s5.5 2 5.5 5.5");
}
</style><path class="ar8m_2b3o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:peer-support"} {...others} />);
}

export default Component;
