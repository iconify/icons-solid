import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gsi4w0b8j {
  fill: currentColor;
  d: path("M15.39 16.56C13.71 15.7 11.53 15 9 15s-4.71.7-6.39 1.56A2.97 2.97 0 0 0 1 19.22V22h16v-2.78c0-1.12-.61-2.15-1.61-2.66");
}

.hpbl23o_b {
  fill: currentColor;
  d: path("M23 3H1v10h2V5h18v16h2z");
}

.l31vcjxth {
  cx: 9px;
  cy: 10px;
  r: 4px;
  fill: currentColor;
}
</style><path class="hpbl23o_b"/><circle class="l31vcjxth"/><path class="gsi4w0b8j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-co-present"} {...others} />);
}

export default Component;
