import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.rg7kgmbdx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M27.879 32.458c6.623.512 11.514 2.318 11.514 4.464c0 2.55-6.891 4.611-15.393 4.611s-15.393-2.061-15.393-4.61c0-2.16 4.964-3.977 11.66-4.477");
}

.yatrnmb9z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.533c-6.012 0-10.885 4.874-10.885 10.885h0c0 8.517 8.336 18.788 10.495 21.307a.645.645 0 0 0 .93 0h.075c2.114-2.52 10.27-12.775 10.27-21.292c.009-6.011-4.858-10.892-10.87-10.9zm0 14.994a4.078 4.078 0 1 1 4.063-4.094h0A4.063 4.063 0 0 1 24 19.482z");
}
</style><path class="rg7kgmbdx"/><path class="yatrnmb9z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:samsung-visit-in"} {...others} />);
}

export default Component;
