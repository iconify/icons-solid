import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iq68olbze {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 8v5m-2-3.75l4 2.5m-4 0l4-2.5M12 8v5m-2-3.75l4 2.5m-4 0l4-2.5M19.5 8v5m-2-3.75l4 2.5m-4 0l4-2.5M2.5 17h19");
}
</style><path class="iq68olbze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:password-dots"} {...others} />);
}

export default Component;
