import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a4zvcbc6r {
  d: path("M16 10v5a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6L5 4c-.369-.369-.369-1 0-1h9a2 2 0 0 1 2 2zm0-3h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2");
}

.ndtb-sbnr {
  stroke-opacity: 0.4;
  d: path("M6 21h12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="ndtb-sbnr"/><path class="a4zvcbc6r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:kettle-duocolor"} {...others} />);
}

export default Component;
