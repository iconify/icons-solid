import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mrxkr_bha {
  fill: currentColor;
  d: path("M9.575 21Q7.75 21 6.55 19.638t-.95-3.163l1.375-10.3q.05-.275.213-.487t.412-.313l7.9-3.15q.45-.2.875.063t.475.762l1.6 13.475q.2 1.8-.975 3.138T14.5 21zm0-2H14.5q.9 0 1.5-.675t.475-1.575L16.15 14H7.975L7.6 16.725q-.125.9.475 1.588t1.5.687M8.9 7.025L8.225 12H15.9l-.875-7.45zM12.05 14v-2z");
}
</style><path class="mrxkr_bha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:home-speaker-outline-rounded"} {...others} />);
}

export default Component;
