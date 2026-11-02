import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k-ffe5bqu {
  stroke-opacity: 0.4;
  d: path("M7 10H3v11h4z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.py6rgdbwd {
  d: path("M7 10a4 4 0 0 0 4-4V5a2 2 0 1 1 4 0v5h6v4l-2 7H7");
}
</style><g class="nrj6p8qat"><path class="k-ffe5bqu"/><path class="py6rgdbwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:thumbs-up-duocolor-sharp"} {...others} />);
}

export default Component;
