import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ndl1ymb2g {
  cx: 34.224px;
  cy: 27.486px;
  r: 9.276px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.qiypggbym {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.986 28.317C21.556 23.132 14.5 13.033 4.5 14.587c8.903-4.43 24.022-5.733 32.693 4.117");
}
</style><circle class="ndl1ymb2g"/><path class="qiypggbym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:tiles-hop"} {...others} />);
}

export default Component;
