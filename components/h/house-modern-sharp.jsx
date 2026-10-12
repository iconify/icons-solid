import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ejeydkb8u {
  d: path("M2.75 20.25V10.5h7.75V4.75h10.75v16.5H2.75z");
}

.ubi3q_i8w {
  d: path("M13.75 8.25h4.5v4.5h-4.5ZM6 21.25v-5h2.5v5m5.25-4.75h4.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="ejeydkb8u"/><path class="ubi3q_i8w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:house-modern-sharp"} {...others} />);
}

export default Component;
