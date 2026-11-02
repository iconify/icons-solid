import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gr9-ebcla {
  d: path("M8 6H3v15h10V11M8 6l5 5M8 6v5h5");
}

.i29wupbqn {
  stroke-opacity: 0.4;
  d: path("M11 3h5m0 0l5 5m-5-5v5h5m0 0v10h-4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="i29wupbqn"/><path class="gr9-ebcla"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:files-duocolor-sharp"} {...others} />);
}

export default Component;
