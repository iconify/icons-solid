import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a4_-7ff2t {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 4h16v13H4Zm5 16h6m0-10l-3-3l-3 3m3-3v7");
}

.ft5dv1b6b {
  fill: none;
}

.wb_0sk4yy {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 4h16v13H4Z");
}
</style><g class="ft5dv1b6b"><path class="wb_0sk4yy"/><path class="a4_-7ff2t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:monitor-upload-duotone-sharp"} {...others} />);
}

export default Component;
