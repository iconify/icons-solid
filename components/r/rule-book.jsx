import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p6t0mnbxw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 6.5C10 4.75 7 4 2.5 4v14.5c4.5 0 7.5.75 9.5 2.5c2-1.75 5-2.5 9.5-2.5V4C17 4 14 4.75 12 6.5Zm0 0V21M5.5 9.5H9m-3.5 4H9");
}
</style><path class="p6t0mnbxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:rule-book"} {...others} />);
}

export default Component;
