import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r2wajvboo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h15v4.5h-15ZM4 7.5l1.5 7h9l1.5-7m-8.5 7V18m5-3.5v2.7m2.75 1.05l2.5-3H22v6h-4.25Zm3.75 0h.01");
}
</style><path class="r2wajvboo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:island-display"} {...others} />);
}

export default Component;
