import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ugfij3n4d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.53 7.754l4.526 8.146a1.75 1.75 0 0 1-1.53 2.6H7.474a1.75 1.75 0 0 1-1.53-2.6l4.526-8.146a1.75 1.75 0 0 1 3.06 0M12 10.25v2.5m0 3h.01M3 8.75a9.5 9.5 0 0 0 0 6.5m18-6.5a9.5 9.5 0 0 1 0 6.5");
}
</style><path class="ugfij3n4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cell-broadcast-alert"} {...others} />);
}

export default Component;
