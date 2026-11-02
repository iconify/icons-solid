import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e2tx-h9dr {
  stroke-opacity: 0.4;
  d: path("M3 3v4a4 4 0 1 0 8 0V3M7 3v18");
}

.hpkjn3bym {
  d: path("M21 14V3a5 5 0 0 0-5 5v2a4 4 0 0 0 4 4zm0 0v7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="e2tx-h9dr"/><path class="hpkjn3bym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:utensils-duocolor-round"} {...others} />);
}

export default Component;
