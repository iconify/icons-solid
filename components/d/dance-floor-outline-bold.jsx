import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iqy6wdsji {
  d: path("M8 16h7v5H8Z");
}

.oz614acod {
  d: path("M13 7h7v6h-7Z");
}

.po47_2bjy {
  d: path("M3 7h7v6H3Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="po47_2bjy"/><path class="oz614acod"/><path class="iqy6wdsji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:dance-floor-outline-bold"} {...others} />);
}

export default Component;
