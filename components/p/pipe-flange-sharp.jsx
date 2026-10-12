import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wj5rb-xhn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 5.25H15A4.75 4.75 0 0 1 19.75 10v8h-5v-7.75h-9Zm-3-1.5h3v8h-3zM13.5 18H21v3h-7.5z");
}
</style><path class="wj5rb-xhn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pipe-flange-sharp"} {...others} />);
}

export default Component;
