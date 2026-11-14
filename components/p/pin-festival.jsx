import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a8vu-3-qm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m4.159 17.91l2.523-6.729a1.5 1.5 0 0 1 2.465-.534l4.206 4.206a1.5 1.5 0 0 1-.534 2.465L6.09 19.841a1.5 1.5 0 0 1-1.931-1.931M11 3l.75 3.5M15 9l4-4m-1.5 7.25l3.5-.75M18 3h.01M21 7.5h.01");
}
</style><path class="a8vu-3-qm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pin-festival"} {...others} />);
}

export default Component;
