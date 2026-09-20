import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fas-c4bex {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M29.18 24.122a6.299 6.299 0 0 0-11.84-2.994a6.299 6.299 0 1 0-10.444 6.944l-.002.002l10.446 12.95l10.446-12.95l-.002-.002a6.27 6.27 0 0 0 1.396-3.95m13.32-13.8a3.346 3.346 0 0 0-6.29-1.59a3.345 3.345 0 0 0-6.29 1.59c0 .795.278 1.525.741 2.099l5.549 6.88l5.55-6.88h-.002a3.33 3.33 0 0 0 .742-2.099");
}
</style><path class="fas-c4bex"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:emoji-two-hearts"} {...others} />);
}

export default Component;
