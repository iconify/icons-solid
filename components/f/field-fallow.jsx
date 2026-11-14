import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lrtv9b2pi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.427 4.5h9.646a1.5 1.5 0 0 1 1.342 2.171l-4.5 9a1.5 1.5 0 0 1-1.342.829H4.927a1.5 1.5 0 0 1-1.342-2.171l4.5-9A1.5 1.5 0 0 1 9.427 4.5M2.5 19.5h19m-9.75-15l-6 12M15 4.5l-6 12m9.25-12l-6 12");
}
</style><path class="lrtv9b2pi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:field-fallow"} {...others} />);
}

export default Component;
