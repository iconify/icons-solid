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

.oz62puhki {
  d: path("M6 18h.01");
}

.s513fwpno {
  stroke-opacity: 0.4;
  d: path("M6 14a4 4 0 0 1 4 4m-4-8a8 8 0 0 1 8 8M6 6c6.627 0 12 5.373 12 12");
}
</style><g class="nrj6p8qat"><path class="s513fwpno"/><path class="oz62puhki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:rss-duocolor-sharp"} {...others} />);
}

export default Component;
