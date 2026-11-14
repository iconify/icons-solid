import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft2xibxry {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.7 17H2.5V2.5H17v12.2M9.75 2.5V17M2.5 9.75H17M18.5 15c.25 2.5 1 3.25 3.5 3.5c-2.5.25-3.25 1-3.5 3.5c-.25-2.5-1-3.25-3.5-3.5c2.5-.25 3.25-1 3.5-3.5Z");
}
</style><path class="ft2xibxry"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:sparkling-clean"} {...others} />);
}

export default Component;
