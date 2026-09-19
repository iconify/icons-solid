import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.tr754zbht {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2h-.1l.1 21.14a1.13 1.13 0 0 1 0 2.26h0a1.14 1.14 0 0 1-1.14-1.13h0a1.14 1.14 0 0 1 .89-1.11L19.57 2.48A21.87 21.87 0 1 0 24 2");
}
</style><path class="tr754zbht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:deco"} {...others} />);
}

export default Component;
