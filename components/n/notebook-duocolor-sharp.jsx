import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ra9bqhbdv {
  stroke-opacity: 0.4;
  d: path("M12 8h4m-4 4h4");
}

.vg_nymjal {
  d: path("M4 4h16v16H4Zm4 0v16");
}
</style><g class="nrj6p8qat"><path class="ra9bqhbdv"/><path class="vg_nymjal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:notebook-duocolor-sharp"} {...others} />);
}

export default Component;
