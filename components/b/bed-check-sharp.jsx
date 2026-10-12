import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xayg5gb_h {
  d: path("M2.75 6V4.75h2.5v6h16v7H2.75Zm2.5 11.75v2.5m13.5-2.5v2.5");
}

.ytk38rb_j {
  d: path("M7.75 5.5h5.5v2.75h-5.5zm-2.5 8.75h16");
}
</style><g class="x2cwu0gfd"><path class="xayg5gb_h"/><path class="ytk38rb_j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:bed-check-sharp"} {...others} />);
}

export default Component;
