import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":128,"height":128};
const content = `<style>.o2b-fobdb {
  fill: var(--svg-color--e20613, #E20613);
  d: path("M4 34v60l44.4-30z");
}

.pf_6pj_zy {
  fill: var(--svg-color--009540, #009540);
  d: path("M4 34h120v30H4z");
}

.t3inkcb4s {
  fill: var(--svg-color--1d1d1b, #1D1D1B);
  d: path("M4 64h120v30H4z");
}
</style><path class="pf_6pj_zy"/><path class="t3inkcb4s"/><path class="o2b-fobdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noto:flag-martinique"} {...others} />);
}

export default Component;
