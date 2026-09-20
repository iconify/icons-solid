import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.gfe14142n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.706 27.207c.948 0 1.71.761 1.71 1.708s-.762 1.708-1.71 1.708s-1.71-.762-1.71-1.708s.762-1.708 1.71-1.708m-5.381 9.852h-4.53l2.265-2.556zM13.16 29.463c.948 0 1.71.762 1.71 1.708s-.762 1.709-1.71 1.709s-1.71-.762-1.71-1.709s.762-1.708 1.71-1.708");
}

.u28_2dbtf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M26.292 9.438a4.94 4.94 0 0 1-4.944 4.937a4.94 4.94 0 0 1-4.945-4.937A4.94 4.94 0 0 1 21.348 4.5a4.94 4.94 0 0 1 4.944 4.938M10.758 20.31h16.98a9.476 9.476 0 0 1 9.504 9.49v4.21a9.476 9.476 0 0 1-9.504 9.49h-16.98m10.59-29.125v5.933");
}
</style><path class="u28_2dbtf"/><path class="gfe14142n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:niconico-live"} {...others} />);
}

export default Component;
