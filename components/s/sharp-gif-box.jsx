import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hh5k1f0eu {
  fill: currentColor;
  d: path("M21 3H3v18h18zM9.5 13v-1h1v2h-3v-4h3v1h-2v2zm3 1h-1v-4h1zm4-3h-2v.5H16v1h-1.5V14h-1v-4h3z");
}
</style><path class="hh5k1f0eu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-gif-box"} {...others} />);
}

export default Component;
