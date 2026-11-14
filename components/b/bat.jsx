import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jgeyromrw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 18q-1-3.5-2.5-3.5q-2-2.5-4-1q-.5-3-2.5-5c2-1 5-.5 7.5 1.5l-.75-4.5L11.5 8h1l1.75-2.5l-.75 4.5C16 8 19 7.5 21 8.5q-2 2-2.5 5q-2-1.5-4 1q-1.5 0-2.5 3.5Zm-1.25-6.25h.01m2.49 0h.01");
}
</style><path class="jgeyromrw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bat"} {...others} />);
}

export default Component;
