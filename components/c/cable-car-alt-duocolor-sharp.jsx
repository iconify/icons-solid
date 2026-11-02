import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lt1qxne8j {
  stroke-opacity: 0.4;
  d: path("m4 9l16-4m-8 2v6m-2-9h.01M14 3h.01");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w7kvw9-1r {
  d: path("M4 13h16v8H4zm0 4h16M9 13v4m6-4v4");
}
</style><g class="nrj6p8qat"><path class="lt1qxne8j"/><path class="w7kvw9-1r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:cable-car-alt-duocolor-sharp"} {...others} />);
}

export default Component;
