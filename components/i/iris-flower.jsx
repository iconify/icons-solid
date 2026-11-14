import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xv4qpqfop {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 11c-2.5-2-2.5-6 0-8.5C14.5 5 14.5 9 12 11Zm0 0c-3.5-1-8 0-8.5 4.5c3.5.5 7-1 8.5-4.5Zm0 0c3.5-1 8 0 8.5 4.5c-3.5.5-7-1-8.5-4.5Zm0 0v10.5");
}
</style><path class="xv4qpqfop"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:iris-flower"} {...others} />);
}

export default Component;
