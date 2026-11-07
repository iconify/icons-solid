import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b6advrghy {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m7 17l-4 4V3h1l14 14Zm3-14h11v11Z");
}

.ft5dv1b6b {
  fill: none;
}

.v91-pwkuq {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 17H7l-4 4V2m7 1h11v11m-3 3h-6M3 2l19 19");
}
</style><g class="ft5dv1b6b"><path class="b6advrghy"/><path class="v91-pwkuq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chat-off-duotone-sharp"} {...others} />);
}

export default Component;
