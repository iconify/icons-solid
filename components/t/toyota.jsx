import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cpd1msbbe {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M36.98 13.802c1.652 1.071 2.533 2.324 2.533 3.604c0 3.635-6.946 6.581-15.513 6.581s-15.513-2.946-15.513-6.58c0-1.284.883-2.538 2.542-3.611");
}

.ig6bpsbwo {
  cx: 24px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 20.5px;
  ry: 13.175px;
}

.tboscobjx {
  cx: 24px;
  cy: 24.872px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4.958px;
  ry: 12.303px;
}
</style><ellipse class="ig6bpsbwo"/><ellipse class="tboscobjx"/><path class="cpd1msbbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:toyota"} {...others} />);
}

export default Component;
