import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.d4m6sm-2m {
  cx: 21.944px;
  cy: 26.056px;
  r: 8.222px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.efrz845he {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.553 12.558A16.44 16.44 0 0 1 26.056 5.5c9.082 0 16.444 7.362 16.444 16.444c0 5.385-2.636 10.43-7.058 13.503");
}

.v5ejp6bjl {
  cx: 21.944px;
  cy: 26.056px;
  r: 12.333px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.yrrh7b4gn {
  cx: 21.944px;
  cy: 26.056px;
  r: 16.444px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><path class="efrz845he"/><circle class="yrrh7b4gn"/><circle class="v5ejp6bjl"/><circle class="d4m6sm-2m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:iyox-wormhole"} {...others} />);
}

export default Component;
