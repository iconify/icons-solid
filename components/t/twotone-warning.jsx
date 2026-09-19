import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lfrh5_bfw {
  fill: currentColor;
  d: path("M1 21h22L12 2zm3.47-2L12 5.99L19.53 19zM11 16h2v2h-2zm0-6h2v4h-2z");
}

.utza932ws {
  fill: currentColor;
  d: path("M4.47 19h15.06L12 5.99zM13 18h-2v-2h2zm0-4h-2v-4h2z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="utza932ws"/><path class="lfrh5_bfw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-warning"} {...others} />);
}

export default Component;
