import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n4ygy-bre {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 15.5h19v5h-19Zm2.5 0l-1.5-9m1.5 9l1.5-9m5.5 9L10.5 4M12 15.5L13.5 4M19 15.5l-1.5-9m1.5 9l1.5-9");
}
</style><path class="n4ygy-bre"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:artificial-turf"} {...others} />);
}

export default Component;
