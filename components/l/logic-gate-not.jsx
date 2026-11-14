import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fty08tc3v {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.263 6.837l6.552 3.872a1.5 1.5 0 0 1 0 2.582l-6.552 3.872A1.5 1.5 0 0 1 5 15.871V8.129a1.5 1.5 0 0 1 2.263-1.292M16 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0M2.5 12H5");
}
</style><path class="fty08tc3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:logic-gate-not"} {...others} />);
}

export default Component;
