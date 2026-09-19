import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.e8mfsztwh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.73 11.243h9.682m-4.841-4.841v9.683M11.392 5.531s11.539 3.624 9.727 24.603");
}

.v2727cben {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.33 30.072C39.353 31.12 42.5 42.278 42.5 42.278s-10.871-9.917-37 .19c0 0 11.823-19.985 5.91-36.864");
}
</style><path class="e8mfsztwh"/><path class="v2727cben"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:lusiadas"} {...others} />);
}

export default Component;
