import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b7801cbfx {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m5 20l3-9h13l-3 9zm14-9V6h-7l-2-2H3v16h2");
}

.ft5dv1b6b {
  fill: none;
}

.qi2zjp3lx {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 4h7l2 2h7v5h2l-3 9H3Z");
}
</style><g class="ft5dv1b6b"><path class="qi2zjp3lx"/><path class="b7801cbfx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:folder-open-duotone-sharp"} {...others} />);
}

export default Component;
