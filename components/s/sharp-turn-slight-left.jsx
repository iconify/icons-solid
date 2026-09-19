import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sqouhrb7s {
  fill: currentColor;
  d: path("M11.66 6V4H6v5.66h2V7.41l5 5V20h2v-8.41L9.41 6z");
}
</style><path class="sqouhrb7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-turn-slight-left"} {...others} />);
}

export default Component;
