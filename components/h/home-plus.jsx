import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mkxsiw7vu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.598 9.977l6.25-5.469a1.75 1.75 0 0 1 2.304 0l6.25 5.469A1.75 1.75 0 0 1 20 11.294v6.956A1.75 1.75 0 0 1 18.25 20H5.75A1.75 1.75 0 0 1 4 18.25v-6.956a1.75 1.75 0 0 1 .598-1.317M12 11.75v5.5M9.25 14.5h5.5");
}
</style><path class="mkxsiw7vu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:home-plus"} {...others} />);
}

export default Component;
