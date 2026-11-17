import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.mldb561ka {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m14 11l-3 3m-4-1l2 6l3-4m-1-1l6 6l4-16l-18 7l4 2");
}

.ydwqkmd5a {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m3 11l18-7l-4 16l-5-5l-3 4l-2-6Z");
}
</style><g class="ft5dv1b6b"><path class="ydwqkmd5a"/><path class="mldb561ka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:telegram-duotone"} {...others} />);
}

export default Component;
