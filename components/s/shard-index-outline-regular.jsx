import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b7nacdcee {
  d: path("M3 6h6");
}

.czv374byt {
  d: path("M10 16h11");
}

.f8c172gmh {
  d: path("M12 6h9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qnmmmsbha {
  d: path("M3 11h11");
}

.tk_gkbbsy {
  d: path("M3 16h4");
}

.zhf4ld96p {
  d: path("M17 11h4");
}
</style><g class="nrj6p8qat"><path class="b7nacdcee"/><path class="f8c172gmh"/><path class="qnmmmsbha"/><path class="zhf4ld96p"/><path class="tk_gkbbsy"/><path class="czv374byt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:shard-index-outline-regular"} {...others} />);
}

export default Component;
