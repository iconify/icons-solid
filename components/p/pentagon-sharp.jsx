import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.afk3glbhf {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 12.75h.01");
}

.rm7kxw03f {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m13.62 4.18l6.03 4.38l1.62 1.18l-.62 1.9l-2.3 7.1l-.62 1.9H6.27l-.62-1.9l-2.3-7.1l-.62-1.9l1.62-1.18l6.03-4.38L12 3z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="rm7kxw03f"/><path class="afk3glbhf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pentagon-sharp"} {...others} />);
}

export default Component;
