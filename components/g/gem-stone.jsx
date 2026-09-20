import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.cm1-zsbfq {
  fill: var(--svg-color--4289c1, #4289c1);
  d: path("M26 12h10L18 33z");
}

.k_no2cbtc {
  fill: var(--svg-color--8ccaf7, #8ccaf7);
  d: path("M10 12H0l18 21zm3-9l-3 9h16l-3-9z");
}

.lp6l87b0h {
  fill: var(--svg-color--5dadec, #5dadec);
  d: path("m18 33l-8-21h16z");
}

.rakwf0bjj {
  fill: var(--svg-color--5dadec, #5dadec);
  d: path("m36 12l-7-9h-6l3 9z");
}

.x3ijfacgt {
  fill: var(--svg-color--bdddf4, #bdddf4);
  d: path("M13 3H7l-7 9h10z");
}
</style><path class="x3ijfacgt"/><path class="rakwf0bjj"/><path class="cm1-zsbfq"/><path class="k_no2cbtc"/><path class="lp6l87b0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:gem-stone"} {...others} />);
}

export default Component;
