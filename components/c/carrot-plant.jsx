import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kv_mfvbaw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10h19M8 10l3.25 9.75a.75.75 0 0 0 1.5 0L16 10m-4 0V3m0 7c-2-3-3.5-4.5-5.5-5.5M12 10c2-3 3.5-4.5 5.5-5.5");
}
</style><path class="kv_mfvbaw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:carrot-plant"} {...others} />);
}

export default Component;
