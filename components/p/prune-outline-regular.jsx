import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ax4bccbjb {
  d: path("m20 7 -4 4");
}

.b1a3u6bfq {
  d: path("m16 7 4 4");
}

.hcq4p1b2v {
  d: path("M6 15h8");
}

.mpjdm200q {
  d: path("M6 4v16");
}

.ngnirel9c {
  d: path("M6 9h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="mpjdm200q"/><path class="ngnirel9c"/><path class="hcq4p1b2v"/><path class="b1a3u6bfq"/><path class="ax4bccbjb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:prune-outline-regular"} {...others} />);
}

export default Component;
