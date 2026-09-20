import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p64rd2dil {
  fill: currentColor;
  d: path("M4 19h4.673v-8H4zm5.673 0h4.654V5H9.673zm5.654 0H20v-6h-4.673zM3 18.384v-6.768q0-.667.475-1.141T4.615 10h4.058V5.616q0-.667.475-1.141T10.288 4h3.424q.666 0 1.14.475t.475 1.14V12h4.058q.666 0 1.14.475t.475 1.14v4.77q0 .666-.475 1.14t-1.14.475H4.615q-.666 0-1.14-.475T3 18.386");
}
</style><path class="p64rd2dil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:leaderboard-outline-rounded"} {...others} />);
}

export default Component;
