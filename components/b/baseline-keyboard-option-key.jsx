import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zhh-k1b_k {
  fill: currentColor;
  d: path("M15 5h6v2h-6zM9 5H3v2h4.85l6.92 12H21v-2h-5.07z");
}
</style><path class="zhh-k1b_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-keyboard-option-key"} {...others} />);
}

export default Component;
