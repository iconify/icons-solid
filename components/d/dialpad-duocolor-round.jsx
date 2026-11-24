import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.clv673b0n {
  d: path("M6 4h.01M12 4h.01M18 4h.01M6 9h.01M12 9h.01M18 9h.01M6 14h.01M12 14h.01M18 14h.01");
}

.k5cp64buq {
  stroke-opacity: 0.4;
  d: path("M12 19h.01");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="k5cp64buq"/><path class="clv673b0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:dialpad-duocolor-round"} {...others} />);
}

export default Component;
