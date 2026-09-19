import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v3k5amnsa {
  fill: currentColor;
  d: path("M12.34 6V4H18v5.66h-2V7.41l-5 5V20H9v-8.41L14.59 6z");
}
</style><path class="v3k5amnsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-turn-slight-right"} {...others} />);
}

export default Component;
