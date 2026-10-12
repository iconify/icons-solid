import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jii7ycbej {
  d: path("M10.5 12h.25v-1.25h2.5V12h1.5v6.5h-5.5V12z");
}

.x1mbz_b7o {
  d: path("M3.25 19.75v-9l1.14-.98l6.47-5.54L12 3.25l1.14.98l6.47 5.54l1.14.98v10.5H3.25z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="x1mbz_b7o"/><path class="jii7ycbej"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:home-battery-sharp"} {...others} />);
}

export default Component;
