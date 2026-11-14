import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jgyqx1boz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 13h12a3.5 3.5 0 0 0 0-7A5.5 5.5 0 0 0 7.75 7A3.25 3.25 0 0 0 6 13m1 0a2.5 2.5 0 1 0 2.25 3.75M2.5 21h19");
}
</style><path class="jgyqx1boz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:shelf-cloud"} {...others} />);
}

export default Component;
