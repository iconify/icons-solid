import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.cpk0fnbgt {
  cx: 24px;
  cy: 24px;
  r: 21.5px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.fktgx3xuk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.287 10.205a13.8 13.8 0 0 0-5.037 1.002a6.507 6.507 0 0 1-4.554 11.156a6.5 6.5 0 0 1-3.786-1.215a13.795 13.795 0 1 0 13.496-10.943z");
}
</style><circle class="cpk0fnbgt"/><path class="fktgx3xuk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ruuvistation"} {...others} />);
}

export default Component;
