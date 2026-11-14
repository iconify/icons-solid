import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t5f0vceqa {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 8h9.5v2H12Zm8.5 2v11.5m-17 0L9 8M7.5 21.5L13 8m1-3.5h7.5m-7.5 0V8m3.75-3.5V8m-13 10.75h4M6 15.5h4m-2.75-3.25h4");
}
</style><path class="t5f0vceqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:loft"} {...others} />);
}

export default Component;
