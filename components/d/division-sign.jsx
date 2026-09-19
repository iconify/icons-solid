import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.eo9d_lsqc {
  cx: 32px;
  cy: 54.5px;
  r: 7.5px;
}

.mc-vbtb-v {
  fill: var(--svg-color--4d5357, #4d5357);
}

.o7-hbnjye {
  d: path("M2 26h60v12H2z");
}

.y6woiebfp {
  cx: 32px;
  cy: 9.5px;
  r: 7.5px;
}
</style><g class="mc-vbtb-v"><path class="o7-hbnjye"/><circle class="y6woiebfp"/><circle class="eo9d_lsqc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione:division-sign"} {...others} />);
}

export default Component;
