import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp_8x1bzb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.hklk91rpo {
  d: path("M5 4L2 4L2 21L9 21M13 4L16 4L16 8M5 2L13 2L13 7L5 7L5 2Z");
}

.iw2bxm7uk {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M18 10C18.2652 10 18.5196 10.1054 18.7071 10.2929L22.7071 14.2929C22.8946 14.4804 23 14.7348 23 15L23 22C23 22.5523 22.5523 23 22 23L12 23C11.4477 23 11 22.5523 11 22L11 11C11 10.4477 11.4477 10 12 10L18 10ZM20.5858 15L18 12.4142L18 15L20.5858 15Z");
  stroke: none;
}
</style><g class="gp_8x1bzb"><path class="hklk91rpo"/><path clip-rule="evenodd" class="iw2bxm7uk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:paste-sharp-fill"} {...others} />);
}

export default Component;
