import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vdb8edbnp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 13h14.5A1.75 1.75 0 0 1 21 14.75v4.5A1.75 1.75 0 0 1 19.25 21H4.75A1.75 1.75 0 0 1 3 19.25v-4.5A1.75 1.75 0 0 1 4.75 13m1.75 0a5.5 5.5 0 0 1 11 0M12 7.5v-4M7.5 15.75V21m4.5-5.25V21m4.5-5.25V21");
}
</style><path class="vdb8edbnp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:state-government"} {...others} />);
}

export default Component;
