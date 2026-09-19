import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.axh5y9bab {
  cx: 24px;
  cy: 24px;
  r: 3.6px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.ma6shyo7b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 20.4v-4.8c0-1 .9-1.9 1.9-1.9h7.4c2.2 0 1 .4 1 1v18.6c0 .6-.4 1-1 1H14.7c-.6 0-1-.4-1-1V14.7c0-.6.4-1 1-1h4.7");
}

.ydqthzbbt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M38.5 42.5h-29c-2.2 0-4-1.8-4-4v-29c0-2.2 1.8-4 4-4h29c2.2 0 4 1.8 4 4v29c0 2.2-1.8 4-4 4");
}
</style><circle class="axh5y9bab"/><path class="ma6shyo7b"/><path class="ydqthzbbt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:nfc-reader"} {...others} />);
}

export default Component;
