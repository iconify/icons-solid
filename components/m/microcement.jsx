import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rc9v69ekj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.75 4h5.5A1.75 1.75 0 0 1 19 5.75a1.75 1.75 0 0 1-1.75 1.75h-5.5A1.75 1.75 0 0 1 10 5.75A1.75 1.75 0 0 1 11.75 4M12 7.5v5m-8 0h16M4.875 15.25h14.25a2.375 2.375 0 0 1 2.375 2.375A2.375 2.375 0 0 1 19.125 20H4.875A2.375 2.375 0 0 1 2.5 17.625a2.375 2.375 0 0 1 2.375-2.375");
}
</style><path class="rc9v69ekj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:microcement"} {...others} />);
}

export default Component;
