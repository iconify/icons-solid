import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.guk-icbfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 12a6.25 6.25 0 1 0 12.5 0A6.25 6.25 0 1 0 2 12Zm6.25-6.25v12.5M2 12h12.5m5-8v16m-2-10a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><path class="guk-icbfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:colour-hsl"} {...others} />);
}

export default Component;
