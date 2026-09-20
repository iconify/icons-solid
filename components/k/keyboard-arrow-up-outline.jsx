import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wumpg3bps {
  fill: currentColor;
  d: path("m12 10.108l-4.6 4.6L6.692 14L12 8.692L17.308 14l-.708.708z");
}
</style><path class="wumpg3bps"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:keyboard-arrow-up-outline"} {...others} />);
}

export default Component;
