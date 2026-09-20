import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fyr_sc2os {
  fill: currentColor;
  d: path("M3 10q0-1.275.738-2.3T5.6 6.25q.45-2.275 2.238-3.763T12 1t4.163 1.488T18.4 6.25q1.125.425 1.863 1.45T21 10q0 1.875-1.325 2.975T16.7 14l-3.775 7.3q-.125.275-.363.4t-.512.125t-.525-.125t-.375-.4L7.35 14q-1.775.075-3.062-1.025T3 10m9.05 8.65l2.7-5.25q-.6.3-1.3.45T12 14q-.675 0-1.362-.15T9.3 13.4z");
}
</style><path class="fyr_sc2os"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:icecream-rounded"} {...others} />);
}

export default Component;
