import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dkiyrmblm {
  d: path("M7 3.5L15.5 5v6L7 12.5a4.5 4.5 0 0 1 0-9Z");
}

.nag64nc0k {
  d: path("M6.25 12.5V20a1.5 1.5 0 0 0 1.5 1.5h.5a1.5 1.5 0 0 0 1.5-1.5v-8m8.75-6h3m-3 4h3M18 15v6m-2.5-4.5l5 3m-5 0l5-3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dkiyrmblm"/><path class="nag64nc0k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hair-dryer-cool"} {...others} />);
}

export default Component;
