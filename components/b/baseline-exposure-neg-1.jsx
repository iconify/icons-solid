import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x7geb1b7w {
  fill: currentColor;
  d: path("M4 11v2h8v-2zm15 7h-2V7.38L14 8.4V6.7L18.7 5h.3z");
}
</style><path class="x7geb1b7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-exposure-neg-1"} {...others} />);
}

export default Component;
