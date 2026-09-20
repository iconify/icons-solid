import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i30itkxpw {
  d: path("M12.5 13c0 -4.8 3.2 -8 8 -8 0 4.8 -3.2 8 -8 8");
}

.ricsl-blc {
  d: path("M12 12v9");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.uy3jp_bjh {
  d: path("M3.5 13c0 -4.8 3.2 -8 8 -8 0 4.8 -3.2 8 -8 8");
}
</style><g class="s0phu2bbs"><path class="ricsl-blc"/><path class="uy3jp_bjh"/><path class="i30itkxpw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:sprout-outline-bold"} {...others} />);
}

export default Component;
