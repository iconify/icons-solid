import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rdlhseb7z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5h18M7 17c-1.5-2.25 1.5-4.75 0-7s1.5-4.75 0-6.5M12 17c-1.5-2.25 1.5-4.75 0-7s1.5-4.75 0-6.5M17 17c-1.5-2.25 1.5-4.75 0-7s1.5-4.75 0-6.5");
}
</style><path class="rdlhseb7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:underfloor-heating-on"} {...others} />);
}

export default Component;
