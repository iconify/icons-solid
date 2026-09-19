import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.fsvvnnb2h {
  width: 9.147px;
  height: 25.324px;
  x: 5.5px;
  y: 17.114px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.189px;
  ry: 2.189px;
}

.g7a319b5y {
  width: 9.147px;
  height: 37px;
  x: 19.457px;
  y: 5.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.189px;
  ry: 2.189px;
}

.pk6pvi7xe {
  width: 9.147px;
  height: 16.167px;
  x: 33.353px;
  y: 26.302px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.189px;
  ry: 2.189px;
}
</style><rect class="pk6pvi7xe"/><rect class="g7a319b5y"/><rect class="fsvvnnb2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:formsapp"} {...others} />);
}

export default Component;
