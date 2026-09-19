import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qib4jnbcj {
  fill: currentColor;
  d: path("M16 12L9 2L2 12h1.86L0 18h7v4h4v-4h7l-3.86-6z");
}

.u-pddjbzr {
  fill: currentColor;
  d: path("M20.14 12H22L15 2l-2.39 3.41L17.92 13h-1.95l3.22 5H24zM13 19h4v3h-4z");
}
</style><path class="qib4jnbcj"/><path class="u-pddjbzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-forest"} {...others} />);
}

export default Component;
