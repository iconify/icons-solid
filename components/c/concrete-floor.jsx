import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.au6vfqbsr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.761 4.5h6.478a1.75 1.75 0 0 1 1.66 1.197l3.833 11.5a1.75 1.75 0 0 1-1.66 2.303H4.928a1.75 1.75 0 0 1-1.66-2.303l3.833-11.5A1.75 1.75 0 0 1 8.761 4.5m-3.261 6h13m-6.5 0v9");
}
</style><path class="au6vfqbsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:concrete-floor"} {...others} />);
}

export default Component;
