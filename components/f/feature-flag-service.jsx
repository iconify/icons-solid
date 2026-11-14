import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.opadhbckl {
  d: path("M18.5 19a1 1 0 1 0 2 0a1 1 0 1 0-2 0Z");
}

.t2p9h3bkv {
  d: path("M3.5 4h14l-3 4.75l3 4.75h-14Zm0-1v18M14 16.5h8v5h-8Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t2p9h3bkv"/><path class="opadhbckl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:feature-flag-service"} {...others} />);
}

export default Component;
