import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uig--_1oe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5H7v6.5H2.5Zm7.25 0h4.5v6.5h-4.5ZM17 5h4.5v6.5H17ZM7 17h9.5m-2.25-2.25L16.5 17l-2.25 2.25");
}
</style><path class="uig--_1oe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:trip-meter"} {...others} />);
}

export default Component;
