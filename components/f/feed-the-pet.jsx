import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e9w8ltbdt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 14h17l-1.25 5.5a2 2 0 0 1-2 1.5H6.75a2 2 0 0 1-2-1.5Zm7-4h.01m2.99-3.5h.01M12.5 3h.01");
}
</style><path class="e9w8ltbdt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:feed-the-pet"} {...others} />);
}

export default Component;
