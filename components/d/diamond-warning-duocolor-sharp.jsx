import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fs89iqu4z {
  d: path("m17 17l-5 5L2 12L12 2l10 10z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w30nbkbiw {
  stroke-opacity: 0.4;
  d: path("M12 9v4m0 3h.01");
}
</style><g class="nrj6p8qat"><path class="w30nbkbiw"/><path class="fs89iqu4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:diamond-warning-duocolor-sharp"} {...others} />);
}

export default Component;
