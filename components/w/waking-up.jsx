import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gej22bt-k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m34.028 12.847l-.005.003a12.587 12.587 0 1 0-21.726 12.041l-.004.002l.026.027a25 25 0 0 0 1.609 1.805C18.032 30.983 30.242 43.5 30.242 43.5V30.463h5.303V23h2.873Z");
}
</style><path class="gej22bt-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:waking-up"} {...others} />);
}

export default Component;
