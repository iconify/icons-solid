import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ia2-frbbt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 10h11.5a2.75 2.75 0 0 0 0-5.5a5 5 0 0 0-8.5.25A2.75 2.75 0 0 0 6 10m.5 3H15m-6.5 3.5h5m-4 3.5h3m5.5-5.5V18m0 3h.01");
}
</style><path class="ia2-frbbt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:tornado-warning"} {...others} />);
}

export default Component;
