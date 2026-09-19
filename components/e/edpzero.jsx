import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.s8-tqbbix {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M6.34 36.27A21.51 21.51 0 0 1 36.27 6.34m5.39 5.39a21.51 21.51 0 0 1-29.93 29.93");
}
</style><path class="s8-tqbbix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:edpzero"} {...others} />);
}

export default Component;
