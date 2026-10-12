import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jxjg053yu {
  d: path("M4 2.75h16v18.5H4z");
}

.m4nplmbvh {
  d: path("M12 9.75L14 8m-5.5 9.25h7");
}

.rd87urb9k {
  cx: 12px;
  cy: 9.75px;
  r: 4px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="jxjg053yu"/><circle class="rd87urb9k"/><path class="m4nplmbvh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:energy-meter-sharp"} {...others} />);
}

export default Component;
