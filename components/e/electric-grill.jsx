import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o_5s96bpi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 4.5h14l-3 11h-14Zm8.5 11v2a2 2 0 0 0 2 2h4.5M9.5 7.25L8 12.75m5-5.5l-1.5 5.5m5-5.5l-1.5 5.5");
}
</style><path class="o_5s96bpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:electric-grill"} {...others} />);
}

export default Component;
