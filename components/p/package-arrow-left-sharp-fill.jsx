import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.k1ypc5qnl {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M22 6.8477L22 13L16 13L13 13L13 22L12 22L2 17.1523L2 6.8477L12 12L22 6.8477Z");
  stroke: none;
}

.kzz0n8byt {
  d: path("M2 6.8477L12 12M12 12L22 6.8477M7 4.4239L17 9.4239M12 12L12 22L2 17.1523L2 6.8477L12 2L22 6.8477L22 13M23 19L16 19M19.2929 15.7071L16 19L19.2929 22.2929");
}
</style><g class="gp_8x1bzb"><path clip-rule="evenodd" class="k1ypc5qnl"/><path class="kzz0n8byt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:package-arrow-left-sharp-fill"} {...others} />);
}

export default Component;
