import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.as86lzbqr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10H7v11.5H2.5Zm7.25-7.5h4.5v19h-4.5ZM17 13h4.5v8.5H17ZM2.5 15.5H7M9.75 11h4.5M17 17.5h4.5");
}
</style><path class="as86lzbqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:chart-bar-stacked"} {...others} />);
}

export default Component;
