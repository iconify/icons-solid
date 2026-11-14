import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kgd64sn1o {
  d: path("M7 10.5c2-1 3 1 5 0s3 1 5 0M10 4c-.75-.75.75-1.25 0-2m4 2c-.75-.75.75-1.25 0-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.whzvonk0o {
  d: path("M5 6.5h14L17.5 18a2.5 2.5 0 0 1-2.5 2.5H9A2.5 2.5 0 0 1 6.5 18Z");
}
</style><g class="ulnmmdpxh"><path class="whzvonk0o"/><path class="kgd64sn1o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:crucible"} {...others} />);
}

export default Component;
