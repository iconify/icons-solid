import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.miei88bmx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.739 14.555C10.148 16.721 6.771 18 3 18C3 10 7.5 3 18 3c0 3.762-1.273 7.133-3.43 9.721M3 18l9-9m2.75 12.25l6.5-6.5m-5.75.75h.01m4.99 5h.01");
}
</style><path class="miei88bmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:end-of-season"} {...others} />);
}

export default Component;
