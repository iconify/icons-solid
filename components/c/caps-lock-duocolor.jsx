import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fnzvalwps {
  stroke-opacity: 0.4;
  d: path("M9 21h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s47b4bdrm {
  d: path("M12 17h-2a1 1 0 0 1-1-1v-4a1 1 0 0 0-1-1H5c-.369 0-.369-.631 0-1l6-6a1.414 1.414 0 0 1 2 0l6 6c.369.369.369 1 0 1h-3a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1z");
}
</style><g class="nrj6p8qat"><path class="fnzvalwps"/><path class="s47b4bdrm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:caps-lock-duocolor"} {...others} />);
}

export default Component;
