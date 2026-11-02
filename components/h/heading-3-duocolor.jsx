import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rb77lkb_u {
  d: path("M3 5v14m8-14v14m-8-7h8");
}

.wh94nybiu {
  stroke-opacity: 0.4;
  d: path("M15 9h6l-4 4h1a3 3 0 0 1 0 6h-3");
}
</style><g class="nrj6p8qat"><path class="wh94nybiu"/><path class="rb77lkb_u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:heading-3-duocolor"} {...others} />);
}

export default Component;
