import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.c6nojbb-z {
  cx: 24px;
  cy: 7.581px;
  r: 3.081px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.i-o6r7aol {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.206 43.5V23.828a6.725 6.725 0 0 0-6.725-6.725H24V34.45M9.794 17.103v19.672A6.725 6.725 0 0 0 16.52 43.5H24");
}
</style><path class="i-o6r7aol"/><circle class="c6nojbb-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:lidentit-numrique"} {...others} />);
}

export default Component;
