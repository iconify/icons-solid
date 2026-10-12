import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.grlcs-vwr {
  d: path("m11 15.5l3.75 3.75l3.75-3.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zatjtebrs {
  d: path("M4.25 4.25h10.5v15");
}
</style><g class="x2cwu0gfd"><path class="zatjtebrs"/><path class="grlcs-vwr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:corner-right-down-sharp"} {...others} />);
}

export default Component;
