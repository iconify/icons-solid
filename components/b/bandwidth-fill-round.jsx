import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i2pso1byg {
  fill: currentColor;
  d: path("M3 4h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m6.707 5.707L8.414 11h7.172l-1.293-1.293a.999.999 0 1 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a.999.999 0 1 1-1.414-1.414L15.586 13H8.414l1.293 1.293a.999.999 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a.999.999 0 1 1 1.414 1.414M3 18h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2");
}
</style><path class="i2pso1byg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:bandwidth-fill-round"} {...others} />);
}

export default Component;
