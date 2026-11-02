import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kyxgkzbxh {
  d: path("M12 4h8v5M9 20H4V4h8M4 9h16M4 15h5m3-11v5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yv0shlb-w {
  stroke-opacity: 0.4;
  d: path("M13 16h8");
}
</style><g class="nrj6p8qat"><path class="yv0shlb-w"/><path class="kyxgkzbxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:table-minus-corner-duocolor-sharp"} {...others} />);
}

export default Component;
