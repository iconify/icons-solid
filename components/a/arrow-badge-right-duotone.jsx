import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dvpgh6wbq {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 19H5c-.369 0-.369-.631 0-1l5-5a1.414 1.414 0 0 0 0-2L5 6c-.369-.369-.369-1 0-1h8l6 6a1.414 1.414 0 0 1 0 2l-6 6z");
}

.ft5dv1b6b {
  fill: none;
}

.rsfubbc0g {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M5 19c-.369 0-.369-.631 0-1l5-5a1.415 1.415 0 0 0 0-2L5 6c-.369-.369-.369-1 0-1h8l6 6a1.415 1.415 0 0 1 0 2l-6 6Z");
}
</style><g class="ft5dv1b6b"><path class="rsfubbc0g"/><path class="dvpgh6wbq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-badge-right-duotone"} {...others} />);
}

export default Component;
