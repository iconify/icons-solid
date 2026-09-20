import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rb0q2n0in {
  fill: currentColor;
  d: path("M20.475 23.3L19 21.825V22h-2v-2.175L.675 3.5L2.1 2.075l19.8 19.8zM19 16.125l-2.075-2.075L14 11.125V7q0-2.075 1.463-3.537T19 2zm-7-7l-2-2V2h2zm-3-3l-2-2V2h2zm-3-3L4.875 2H6zM7 22v-9.15q-1.275-.35-2.137-1.4T4 9V3.975l2 2V9h1V6.975l2.025 2l2.25 2.275q-.4.575-.987.988T9 12.85V22z");
}
</style><path class="rb0q2n0in"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:no-meals"} {...others} />);
}

export default Component;
