import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xh4iq2m2b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 3h11A3.5 3.5 0 0 1 21 6.5V15a3.5 3.5 0 0 1-3.5 3.5h-11A3.5 3.5 0 0 1 3 15V6.5A3.5 3.5 0 0 1 6.5 3m1 3v9.5M12 6v9.5M16.5 6v9.5M6 18.5V21m12-2.5V21");
}
</style><path class="xh4iq2m2b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:column-radiator"} {...others} />);
}

export default Component;
