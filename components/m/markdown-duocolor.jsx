import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e2mhiz0sy {
  stroke-opacity: 0.4;
  d: path("M18 7v10m-3-3l3 3l3-3");
}

.f40jmzbqv {
  d: path("M3 17V7l4 5l4-5v10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="e2mhiz0sy"/><path class="f40jmzbqv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:markdown-duocolor"} {...others} />);
}

export default Component;
