import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.uhx3m_1tm {
  width: 31px;
  height: 39px;
  x: 8.5px;
  y: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 4px;
  ry: 4px;
}

.xjr6vj7gz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M11.144 9.121h25.712v25.117H11.144zm6.324.402v24.496m6.29-24.678v24.496m6.774-24.496v24.496m5.767-18.403H11.517m24.92 6.147H11.649m24.834 6.345H11.65");
}
</style><rect class="uhx3m_1tm"/><path class="xjr6vj7gz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:pix"} {...others} />);
}

export default Component;
