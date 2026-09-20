import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c4my-jbpv {
  d: path("M2 5a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.ha2bk5bpt {
  d: path("M2 15a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.jaql6vb1s {
  d: path("m14 14.5 -4 4");
}

.l7-tgmbes {
  d: path("m10 14.5 4 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qkea2dbiu {
  d: path("M5 6.5h14");
}
</style><g class="nrj6p8qat"><path class="c4my-jbpv"/><path class="qkea2dbiu"/><path class="ha2bk5bpt"/><path class="l7-tgmbes"/><path class="jaql6vb1s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:anomaly-data-outline-regular"} {...others} />);
}

export default Component;
