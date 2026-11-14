import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.soc0ncbql {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.366 5h9.268a1.75 1.75 0 0 1 1.697 1.326l2.625 10.5A1.75 1.75 0 0 1 19.259 19H4.741a1.75 1.75 0 0 1-1.697-2.174l2.625-10.5A1.75 1.75 0 0 1 7.366 5M12 5v14M5 9h14M4 13h16");
}
</style><path class="soc0ncbql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:gym-floor"} {...others} />);
}

export default Component;
