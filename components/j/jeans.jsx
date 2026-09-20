import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.ehthxc7dn {
  fill: var(--svg-color--3b88c3, #3b88c3);
  d: path("M15.818 0H26v4.568l6.182 29.114L24.454 36l-6.409-23.182z");
}

.fi1y-8-fq {
  fill: var(--svg-color--3b88c3, #3b88c3);
  d: path("M20.182 0H10v4.568L3.818 33.682L11.545 36l6.41-23.182z");
}

.prnm9ib6o {
  fill: var(--svg-color--269, #269);
  d: path("M12 0h2v3h-2zm10 0h2v3h-2zm-6 4h2v7h-2z");
}

.yis_d5b2x {
  fill: var(--svg-color--269, #269);
  d: path("M10 2h16v2H10zm9 10h-2l-4-2h10z");
}
</style><path class="fi1y-8-fq"/><path class="ehthxc7dn"/><path class="yis_d5b2x"/><path class="prnm9ib6o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:jeans"} {...others} />);
}

export default Component;
