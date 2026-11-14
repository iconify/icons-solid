import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r4zu_6b1f {
  d: path("M10 7.5L11.5 9L14 6.5m4 9.25h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y06uiebsu {
  d: path("M2.5 12h19v7.5h-19Zm5 0V4A1.5 1.5 0 0 1 9 2.5h6A1.5 1.5 0 0 1 16.5 4v8");
}
</style><g class="ulnmmdpxh"><path class="y06uiebsu"/><path class="r4zu_6b1f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ballot-scanner"} {...others} />);
}

export default Component;
