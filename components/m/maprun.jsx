import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.g0s-pkxzy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m22.385 30.338l-8.46-10.002v19.981H5.5V7.847h8.293l15.286 18.084l5.095-5.861v20.282H42.5V7.648h-8.292l-8.193 9.991");
}

.gtg16xbdf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m25.981 13.276l.034 4.363h4.43");
}

.vliewzaaj {
  cx: 24.149px;
  cy: 32.104px;
  r: 1.607px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="g0s-pkxzy"/><path class="gtg16xbdf"/><circle class="vliewzaaj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:maprun"} {...others} />);
}

export default Component;
