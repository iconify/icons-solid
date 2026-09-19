import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.bsx0s_bjj {
  width: 25.525px;
  height: 39px;
  x: 11.237px;
  y: 4.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2px;
}

.rni-g5kma {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.858 30.12V14.748l5.456 5.884m-5.456-5.884l-5.456 5.884m-7.165 17.555h25.526");
}
</style><rect class="bsx0s_bjj"/><path class="rni-g5kma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:huawei-system-update"} {...others} />);
}

export default Component;
