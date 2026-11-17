import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bzxa35bzj {
  stroke-opacity: 0.4;
  d: path("M8 14c1-2 2-2 3-1s1 2 2 2s2-2 3 0");
}

.lct58ib6x {
  d: path("M13 3H5v18h14V9m-6-6l6 6m-6-6v6h6M9 18h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="bzxa35bzj"/><path class="lct58ib6x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:file-signature-duocolor-sharp"} {...others} />);
}

export default Component;
