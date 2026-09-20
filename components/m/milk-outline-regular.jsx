import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f8gsx7b5s {
  d: path("M6 8h12");
}

.gcalxb98a {
  d: path("M8 13h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qtxvlht3c {
  d: path("M8 17h8");
}

.t2e2ofbwt {
  d: path("M6 21V8l4 -4h4l4 4v13Z");
}
</style><g class="nrj6p8qat"><path class="t2e2ofbwt"/><path class="f8gsx7b5s"/><path class="gcalxb98a"/><path class="qtxvlht3c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:milk-outline-regular"} {...others} />);
}

export default Component;
