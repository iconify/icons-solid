import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.matip0chy {
  d: path("M4 3h8v18H4Zm4 0v18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xn5coccyh {
  stroke-opacity: 0.4;
  d: path("m16 4l4 16l-4 1l-4-16m0 0l4-1");
}
</style><g class="nrj6p8qat"><path class="xn5coccyh"/><path class="matip0chy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:library-duocolor-sharp"} {...others} />);
}

export default Component;
