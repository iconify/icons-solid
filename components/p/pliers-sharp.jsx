import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hiudm8rmj {
  d: path("m10.91 13.16l.43.18l.91.41l-.45.89l-2.85 5.72l-.45.89l-.94-.34l-.87-.32l-.94-.34l.49-.87l3.27-5.76l.49-.87z");
}

.k7xlsxxlt {
  d: path("m14.49 13.62l3.27 5.76l.49.87l-.94.34l-.87.32l-.94.34l-.45-.89l-2.85-5.72l-.45-.89l.91-.41l.43-.18l.91-.41z");
}

.r1z1rxbhq {
  d: path("M9.75 8.5V2.75h4.5V8.5Zm2.25-4v2.75");
}

.sapxmnb0l {
  cx: 12px;
  cy: 10.5px;
  r: 2px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="r1z1rxbhq"/><circle class="sapxmnb0l"/><path class="hiudm8rmj"/><path class="k7xlsxxlt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pliers-sharp"} {...others} />);
}

export default Component;
