import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.s4vgg6blr {
  cx: 24.918px;
  cy: 6.505px;
  r: 1.591px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.z1pqwz8la {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14.114 43.705l3.077-7.784m14.915-1.305l4.381 7.132m-21.161-5.664l18.644-1.631c2.637-.23 5.335-3.446 5.104-6.083l-.979-11.186c-.23-2.637-3.446-5.335-6.082-5.104l-18.644 1.63c-2.637.23-5.335 3.446-5.104 6.083l.978 11.186c.231 2.637 3.446 5.335 6.083 5.104m4.339-22.923L16.6 8.176m6.709 4.665l1.408-4.759");
}

.zcqrzob1s {
  cx: 15.63px;
  cy: 6.577px;
  r: 1.871px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="z1pqwz8la"/><circle class="zcqrzob1s"/><circle class="s4vgg6blr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:zapp"} {...others} />);
}

export default Component;
