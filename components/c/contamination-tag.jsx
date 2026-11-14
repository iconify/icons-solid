import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v_1rtmbbx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 5.5H15m-8.5 0V3h4v2.5m1.481 16H4.75l-1-16h9.5l-.437 6.986M12.5 17.5l3-4h6v8h-6Zm4.75-1.25l2.5 2.5m0-2.5l-2.5 2.5");
}
</style><path class="v_1rtmbbx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:contamination-tag"} {...others} />);
}

export default Component;
