import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h648v5bbd {
  d: path("M11.5 13.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z3sio_xld {
  d: path("M10 6v2c0 1.5-3 2.5-3 5v7a1.5 1.5 0 0 0 1.5 1.5h7A1.5 1.5 0 0 0 17 20v-7c0-2.5-3-3.5-3-5V6M9.5 2.5h5V6h-5Zm1.5 15h.01");
}
</style><g class="ulnmmdpxh"><path class="z3sio_xld"/><path class="h648v5bbd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:soda-bottle"} {...others} />);
}

export default Component;
