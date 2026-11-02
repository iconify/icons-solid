import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bixu74c8y {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M22 9a1 1 0 0 1-1 1a2 2 0 1 0 0 4a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1a2 2 0 1 0 0-4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.hywcwmb5h {
  d: path("M9.01 8a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2Zm1.697 6.707a.999.999 0 1 1-1.414-1.414l4-4a.999.999 0 1 1 1.414 1.414ZM15 14h.01a1 1 0 0 1 0 2H15a1 1 0 0 1 0-2");
}
</style><g class="cuyn6tgcc"><path class="bixu74c8y"/><path class="hywcwmb5h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:coupon-bulk-sharp"} {...others} />);
}

export default Component;
