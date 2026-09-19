import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.an9d5p_aq {
  fill: currentColor;
  d: path("M20 18V5h-.3L15 6.7v1.7l3-1.02V18zm-10-1v-4h4v-2h-4V7H8v4H4v2h4v4z");
}
</style><path class="an9d5p_aq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-exposure-plus-1"} {...others} />);
}

export default Component;
