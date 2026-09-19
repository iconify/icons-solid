import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t7rpg_3yx {
  fill: currentColor;
  d: path("m3 8.41l9 9l7-7V15h2V7h-8v2h4.59L12 14.59L4.41 7z");
}
</style><path class="t7rpg_3yx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-call-missed-outgoing"} {...others} />);
}

export default Component;
