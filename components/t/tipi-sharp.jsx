import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c9alkdxud {
  d: path("m12 11.5l2.75 7.25h-5.5Zm-9.25 9.75h18.5m-17-1.75l-.75 1.75m16.25-1.75l.75 1.75");
}

.udlpebcuy {
  d: path("m12.35 6.66l6.05 11.43l.35.66H5.25l.35-.66l6.05-11.43L12 6zm-2.6-3.91L12.6 6.9m1.65-4.15L11.4 6.9");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="udlpebcuy"/><path class="c9alkdxud"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:tipi-sharp"} {...others} />);
}

export default Component;
