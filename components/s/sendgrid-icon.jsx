import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cfnvsj55s {
  fill: var(--svg-color--00a9d1, #00a9d1);
  d: path("M170.667 170.667H256V85.331h-85.333zM85.333 85.333h85.334V0H85.333z");
}

.ctd5t1bzv {
  fill: var(--svg-color--9dd6e3, #9dd6e3);
  d: path("M256 0v170.667h-85.333v85.33H.002v-85.331H0V85.332h85.333V0z");
}

.dv-clabsf {
  fill: var(--svg-color--3f72ab, #3f72ab);
  d: path("M.002 255.996h85.333v-85.333H.002z");
}

.n57iunb9j {
  fill: var(--svg-color--3f72ab, #3f72ab);
  d: path("M170.667 85.333H256V0h-85.333z");
}

.zkrj_0b_o {
  fill: var(--svg-color--2191c4, #2191c4);
  d: path("M85.333 170.665h85.334V85.331H85.333z");
}
</style><path class="ctd5t1bzv"/><path class="dv-clabsf"/><path class="cfnvsj55s"/><path class="zkrj_0b_o"/><path class="n57iunb9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"logos:sendgrid-icon"} {...others} />);
}

export default Component;
