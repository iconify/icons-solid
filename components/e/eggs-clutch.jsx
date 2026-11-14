import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kswi1cv8q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12h18c-.5 5-4.5 7.5-9 7.5S3.5 17 3 12m1.75 0c0-3.5.75-5.5 1.5-5.5s1.5 2 1.5 5.5m2.75 0c0-4.5.75-7.5 1.5-7.5s1.5 3 1.5 7.5m2.75 0c0-3.5.75-5.5 1.5-5.5s1.5 2 1.5 5.5");
}
</style><path class="kswi1cv8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:eggs-clutch"} {...others} />);
}

export default Component;
