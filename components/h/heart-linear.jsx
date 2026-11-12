import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a6lbbhbts {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.96173 18.9108C6.01943 16.5913 2 14 2 9.13704C2 4.2741 7.50016 0.825403 12 5.50057C16.4998 0.825403 22 4.2741 22 9.13704C22 14 17.9806 16.5913 15.0383 18.9108C14 19.7293 13 20.4999 12 20.4999C11 20.4999 10 19.7293 8.96173 18.9108Z");
}
</style><path class="a6lbbhbts"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:heart-linear"} {...others} />);
}

export default Component;
