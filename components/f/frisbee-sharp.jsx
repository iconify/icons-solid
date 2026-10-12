import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hvg78omco {
  d: path("M17.01 8.63a4 2-20 1 1-7.52 2.74a4 2-20 1 1 7.52-2.74ZM2.75 18l5.5-2m-3 5.25l5.5-2");
}

.qfimmvbkh {
  d: path("M20.53 7.35a7.75 4.25-20 1 1-14.56 5.3a7.75 4.25-20 1 1 14.56-5.3Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="qfimmvbkh"/><path class="hvg78omco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:frisbee-sharp"} {...others} />);
}

export default Component;
