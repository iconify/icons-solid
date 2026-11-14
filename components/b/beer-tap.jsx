import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vcv7h0lcz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 2.5h5L12 10H9Zm-4 10h13.5A1.5 1.5 0 0 1 19 14v4.5h-3V16H4ZM9.5 10v2.5m2-2.5v2.5m6 8.5h.01");
}
</style><path class="vcv7h0lcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:beer-tap"} {...others} />);
}

export default Component;
