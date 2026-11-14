import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.svrx0nbys {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 7.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0M2.5 20c0-3.25 2.25-5.5 5.5-5.5c2.206 0 3.952 1.037 4.845 2.719M15.25 4.25a3.25 3.25 0 0 1 0 6.5M17 13.5q.22.022.437.055M20.5 15l-5 3l5 3m0-6h.01m-5.01 3h.01m4.99 3h.01");
}
</style><path class="svrx0nbys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:people-sharing"} {...others} />);
}

export default Component;
