import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vba52ubku {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.5 8.5l3 2.5h13l3-2.5M5.5 11v10h13V11m-10-2.75c-1-1.75 1-3.25 0-5.75M12 8.25C11 6.5 13 5 12 2.5m3.5 5.75c-1-1.75 1-3.25 0-5.75");
}
</style><path class="vba52ubku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:lab-smoke"} {...others} />);
}

export default Component;
