import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mow_f5l_u {
  d: path("M2.5 17V5A1.5 1.5 0 0 1 4 3.5h6v5h10a1.5 1.5 0 0 1 1.5 1.5v7Z");
}

.qw88tgb1a {
  d: path("M5.5 3.5v5H10m5 0v-3M5 19a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mow_f5l_u"/><path class="qw88tgb1a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:diesel-locomotive"} {...others} />);
}

export default Component;
