import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f0t1oxrlh {
  d: path("M3 3h14v6H3Z");
}

.fho5bf-il {
  stroke-opacity: 0.4;
  d: path("M17 6h4v6h-9v3m-2 0h4v6h-4Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="fho5bf-il"/><path class="f0t1oxrlh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:paint-roller-duocolor-sharp"} {...others} />);
}

export default Component;
