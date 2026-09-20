import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bbj1r8bpd {
  d: path("M4 14h12");
}

.lpaeqt_qp {
  d: path("M4 9h12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.tvpgdo31a {
  d: path("M2 6a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2H4a2 2 0 0 1 -2 -2Z");
}

.ucd51obdt {
  d: path("M19 6v12");
}

.wj36vd5ho {
  d: path("m17 16 2 2 2 -2");
}
</style><g class="nrj6p8qat"><path class="tvpgdo31a"/><path class="lpaeqt_qp"/><path class="bbj1r8bpd"/><path class="ucd51obdt"/><path class="wj36vd5ho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:index-data-outline-regular"} {...others} />);
}

export default Component;
