import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ehv5k_5zm {
  d: path("M3 4h18l-1.5 13.5A2.5 2.5 0 0 1 17 20H7a2.5 2.5 0 0 1-2.5-2.5Zm.5 3.75h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zy-hl0x7e {
  d: path("M9.25 13h5.5v4h-5.5Zm1.25 0v-.5a1.5 1.5 0 0 1 3 0v.5");
}
</style><g class="ulnmmdpxh"><path class="ehv5k_5zm"/><path class="zy-hl0x7e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bucket-private"} {...others} />);
}

export default Component;
