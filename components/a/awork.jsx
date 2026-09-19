import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ek287wbtl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.07 20.424v15.098L23.69 43.5l13.24-7.737v-15.51l-6.5 3.507v11.575l-6.74-4.23l-6.361 4.265V23.76Z");
}

.uxp0x2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.69 4.5L6.739 14.438l10.59 6.224l6.363-3.68l6.74 3.68l10.831-6.224Z");
}
</style><path class="uxp0x2bbs"/><path class="ek287wbtl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:awork"} {...others} />);
}

export default Component;
