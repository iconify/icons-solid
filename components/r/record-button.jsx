import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.tcgfi6b_o {
  cx: 64px;
  cy: 64px;
  r: 32px;
  fill: var(--svg-color--40c0e7, #40c0e7);
}

.y_aqcmi-i {
  fill: none;
  d: path("M128 128H0V0h128z");
}
</style><path class="y_aqcmi-i"/><circle class="tcgfi6b_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto-v1:record-button"} {...others} />);
}

export default Component;
