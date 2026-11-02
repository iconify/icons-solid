import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fkdpf6eac {
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qtrzr1b0h {
  stroke-opacity: 0.4;
  d: path("M19 12h2m-4.05 4.95l1.414 1.414M12 19v2m-4.95-4.05l-1.414 1.414M5 12H3m4.05-4.95L5.636 5.636M12 5V3m4.95 4.05l1.414-1.414");
}
</style><g class="nrj6p8qat"><path class="qtrzr1b0h"/><path class="fkdpf6eac"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:sun-duocolor"} {...others} />);
}

export default Component;
