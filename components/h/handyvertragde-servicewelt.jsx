import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.wg97h6mas {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M40.08 5.84L21.47 30.11l-7.83-8.8l-3.48 3.1l11.51 13.43L42.5 10.03V38.5c0 2.21-1.79 4-4 4h-29c-2.21 0-4-1.79-4-4v-29c0-2.21 1.79-4 4-4h29c.56 0 1.1.12 1.58.34");
}
</style><path class="wg97h6mas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:handyvertragde-servicewelt"} {...others} />);
}

export default Component;
