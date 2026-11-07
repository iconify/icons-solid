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

.o9zqzop1y {
  stroke-opacity: 0.4;
  d: path("m11.573 8.101l2.257 1.58a1 1 0 0 1 0 1.638l-2.257 1.58a1 1 0 0 1-1.573-.82V8.921a1 1 0 0 1 1.573-.82");
}

.oqu4abb4q {
  d: path("M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm5 14h6");
}
</style><g class="nrj6p8qat"><path class="o9zqzop1y"/><path class="oqu4abb4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:monitor-play-duocolor"} {...others} />);
}

export default Component;
