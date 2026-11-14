import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g00rdtk7x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.091 15.5H6.5c-2.25 0-4-1.75-4-4c0-2 1.5-3.75 3.5-4c.75-2.75 3.25-5 6.5-5c3.5 0 6.25 2.5 6.75 6c1.25.5 2.25 2 2.25 3.5c0 .317-.049.634-.142.94m.392 8.81h-4.5L14 18.5l4.5-4.5l3.25 3.25Zm-2.5-2.5h.01");
}
</style><path class="g00rdtk7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:keyword-cloud"} {...others} />);
}

export default Component;
