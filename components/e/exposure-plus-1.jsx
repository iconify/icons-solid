import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bm_u_25eq {
  fill: currentColor;
  d: path("M10 7H8v4H4v2h4v4h2v-4h4v-2h-4zm10 11h-2V7.38L15 8.4V6.7L19.7 5h.3z");
}
</style><path class="bm_u_25eq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:exposure-plus-1"} {...others} />);
}

export default Component;
