import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xkp8nbc6y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 5v3M10 2.5V6m3.5-3v3.5m3.5-1v3M6.5 10.25V13M10 8.25v4.25m3.5-3.75v3.75m3.5-1.75v2.5m-10.5 2l2 5.25m1.5-5.75l.75 5.75m2.75-5.75l-.25 5.75m3.75-5l-1.5 5");
}
</style><path class="xkp8nbc6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hand-bones"} {...others} />);
}

export default Component;
