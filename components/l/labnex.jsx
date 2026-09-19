import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fcp2k0wsl {
  cx: 30.801px;
  cy: 29.664px;
  r: 1.75px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.i0xpxnzlv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 42.5l18.5-14.586L36.312 5.5l-6.136 14.478H17.824L11.688 5.5L5.5 27.914z");
}

.i5kqru1go {
  cx: 17.199px;
  cy: 29.664px;
  r: 1.75px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="i0xpxnzlv"/><circle class="i5kqru1go"/><circle class="fcp2k0wsl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:labnex"} {...others} />);
}

export default Component;
