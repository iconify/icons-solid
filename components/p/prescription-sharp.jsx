import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bh4biibbp {
  d: path("M4.75 2.75h14.5v18.5H4.75z");
}

.wfsj7yb-q {
  d: path("M8.75 16.5V7.25h4.75v4H8.75m2 0l4.75 5.25m0-4.25l-3.75 4.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="bh4biibbp"/><path class="wfsj7yb-q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:prescription-sharp"} {...others} />);
}

export default Component;
