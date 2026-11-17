import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ft5dv1b6b {
  fill: none;
}

.hwqrpvbdv {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M10 3h4l7 2v14l-7 2h-4l-7-2V5Z");
}

.myxug-jfn {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m3 5l7-2h4l7 2v14l-7 2h-4l-7-2zm3 2h.01M12 3v18");
}
</style><g class="ft5dv1b6b"><path class="hwqrpvbdv"/><path class="myxug-jfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:mobile-foldable-duotone-sharp"} {...others} />);
}

export default Component;
