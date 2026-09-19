import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.kbn41_bum {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M28.098 13L12.696 34.5h5.134l12.835-17.917zm5.134 7.167L22.964 34.5h5.134l5.134-7.167l5.134 7.167H43.5zM36.5 17h6m-3-3v6");
}

.pz6hezbdf {
  cx: 8.25px;
  cy: 31.25px;
  r: 3.75px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><circle class="pz6hezbdf"/><path class="kbn41_bum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:ja-bank-plus"} {...others} />);
}

export default Component;
