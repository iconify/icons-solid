import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e54x5p4fq {
  stroke-opacity: 0.4;
  d: path("M9 12h6m-3-3v6");
}

.fs89iqu4z {
  d: path("m17 17l-5 5L2 12L12 2l10 10z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="e54x5p4fq"/><path class="fs89iqu4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:diamond-plus-duocolor-sharp"} {...others} />);
}

export default Component;
