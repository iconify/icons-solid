import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.sqzvl-3po {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 31.929c-1.321-2.643-5.286-3.965-5.286-6.796c0-2.454 3.965-3.776 5.286-1.133c1.321-2.643 5.286-1.23 5.286 1.321S25.32 29.286 24 31.928");
}

.w0e240bko {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.536 24v13.214c0 1.322-1.322 2.643-2.643 2.643H12.107c-1.321 0-2.643-1.321-2.643-2.643V24");
}

.yurp1k_1l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 24L24 8.143L42.5 24M9.464 20.475V9.465h5.286v6.606");
}
</style><path class="w0e240bko"/><path class="sqzvl-3po"/><path class="yurp1k_1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:cozy-couples"} {...others} />);
}

export default Component;
