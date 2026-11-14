import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l3hhi3ouz {
  d: path("M6.5 4L12 8l5.5-4");
}

.qzo4gmbdx {
  d: path("M6 3h12v9.5H6Z");
}

.tei-8sbpw {
  d: path("M2.5 12v7a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2v-7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tei-8sbpw"/><path class="qzo4gmbdx"/><path class="l3hhi3ouz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:email-quarantine"} {...others} />);
}

export default Component;
