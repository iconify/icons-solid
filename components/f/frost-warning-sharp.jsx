import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k7d35bvtx {
  d: path("M13.12 9.88L14 9l.88.88m3.13 5.41l.32 1.21l-1.21.32m-6.24 0l-1.21-.32l.32-1.21");
}

.m6rz7zcqn {
  d: path("M3 21V8a5 5 0 0 1 5-5h13m-7 5v12m5.2-9L8.8 17m10.4 0L8.8 11");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="m6rz7zcqn"/><path class="k7d35bvtx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:frost-warning-sharp"} {...others} />);
}

export default Component;
