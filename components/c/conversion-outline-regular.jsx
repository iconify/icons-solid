import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bqn9n10jh {
  d: path("M3 6a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oe-s_bbxg {
  d: path("m18.5 15 3.5 3.5 -3.5 3.5 -3.5 -3.5Z");
}

.ro0ipo0zu {
  d: path("M14.5 11.5v3h-3");
}

.y8yw5pt-w {
  d: path("m10 10 2 2");
}
</style><g class="nrj6p8qat"><path class="bqn9n10jh"/><path class="y8yw5pt-w"/><path class="ro0ipo0zu"/><path class="oe-s_bbxg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:conversion-outline-regular"} {...others} />);
}

export default Component;
