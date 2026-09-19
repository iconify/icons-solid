import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.frx6kubpi {
  cx: 23.182px;
  cy: 24.819px;
  r: 17.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.xnipclqhj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.045 16.59a21.5 21.5 0 0 1 0 16.455M7.98 9.616a21.5 21.5 0 0 1 15.202-6.297m-8.228 41.363A21.5 21.5 0 0 1 3.318 33.045");
}
</style><path class="xnipclqhj"/><circle class="frx6kubpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:rapidshot"} {...others} />);
}

export default Component;
