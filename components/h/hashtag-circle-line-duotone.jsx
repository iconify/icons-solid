import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cxzlycbfj {
  d: path("M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.dh-0v0bfa {
  stroke-linejoin: round;
  d: path("M17 14H6");
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mv-pxdb7h {
  stroke-linejoin: round;
  d: path("M18 10H7");
}

.qzz1y5j1i {
  stroke-linejoin: round;
  d: path("M16 7L13 17");
}

.spo4lsrxb {
  stroke-linejoin: round;
  d: path("M11 7L8 17");
}
</style><g class="ipq1z-bjh"><path class="spo4lsrxb"/><path class="qzz1y5j1i"/><path class="mv-pxdb7h"/><path class="dh-0v0bfa"/><path class="cxzlycbfj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hashtag-circle-line-duotone"} {...others} />);
}

export default Component;
