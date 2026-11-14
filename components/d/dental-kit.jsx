import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a_4aeob0l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 10.5h12a3.5 3.5 0 0 1 3.5 3.5v3.5A3.5 3.5 0 0 1 18 21H6a3.5 3.5 0 0 1-3.5-3.5V14A3.5 3.5 0 0 1 6 10.5m-1.5 0V8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2.5m1.5 0l6.718-6.718m-4.243 0l.707-.707a1.5 1.5 0 0 1 2.121 0a1.5 1.5 0 0 1 0 2.122l-.707.707a1.5 1.5 0 0 1-2.121 0a1.5 1.5 0 0 1 0-2.122");
}
</style><path class="a_4aeob0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:dental-kit"} {...others} />);
}

export default Component;
