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

.v8opnab4b {
  stroke-opacity: 0.4;
  d: path("M11 3H6v7M3 7l3 3l3-3");
}

.vojuqzbql {
  d: path("M3 15h6v6H3ZM15 3h6v6h-6Z");
}
</style><g class="nrj6p8qat"><path class="v8opnab4b"/><path class="vojuqzbql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:replace-duocolor-sharp"} {...others} />);
}

export default Component;
