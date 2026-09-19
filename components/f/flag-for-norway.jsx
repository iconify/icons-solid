import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.ik8-3_bxu {
  fill: var(--svg-color--ec1c24, #ec1c24);
  d: path("M64 43c0 6.075-3.373 11-10 11H10C3.373 54 0 49.075 0 43V21c0-6.075 3.373-11 10-11h44c6.627 0 10 4.925 10 11z");
}

.ry653vb_n {
  fill: var(--svg-color--2b3990, #2b3990);
  d: path("M0 29h64v6H0z");
}

.ux6-9wcsq {
  fill: var(--svg-color--2b3990, #2b3990);
  d: path("M20 10h7v44h-7z");
}

.v75_3fwkw {
  fill: var(--svg-color--e6e7e8, #e6e7e8);
  d: path("M0 27h64v10H0z");
}

.x_e4y3b_i {
  fill: var(--svg-color--e6e7e8, #e6e7e8);
  d: path("M18 10h11v44H18z");
}
</style><path class="ik8-3_bxu"/><path class="x_e4y3b_i"/><path class="v75_3fwkw"/><path class="ux6-9wcsq"/><path class="ry653vb_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-v1:flag-for-norway"} {...others} />);
}

export default Component;
