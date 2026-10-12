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

.z0x-1vbga {
  d: path("M4.5 20.25H21l-.91-1.19L9.41 5.19L8.5 4l-.48 1.42l-4.54 13.41L3 20.25z");
}

.zxsa6nb8l {
  d: path("M8.5 20.25a5.5 5.5 0 0 0-3.74-5.21");
}
</style><g class="x2cwu0gfd"><path class="z0x-1vbga"/><path class="zxsa6nb8l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:triangle-right-angle-sharp"} {...others} />);
}

export default Component;
