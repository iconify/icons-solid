import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rxaxbotqe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 4h12a3.5 3.5 0 0 1 3.5 3.5v6A3.5 3.5 0 0 1 18 17H6a3.5 3.5 0 0 1-3.5-3.5v-6A3.5 3.5 0 0 1 6 4m6 13v3.5m-4 0h8M9 4v13m6-13v13M2.5 10.5h19");
}
</style><path class="rxaxbotqe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:print-quality"} {...others} />);
}

export default Component;
