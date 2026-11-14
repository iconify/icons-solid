import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cp-1d2tbx {
  d: path("M2.5 6.5a2 2 0 0 1 2-2H16l5.5 5.5v7.5a2 2 0 0 1-2 2h-15a2 2 0 0 1-2-2Z");
}

.nodwwzb4z {
  d: path("M16 4.5V10h5.5M6 9h6.5M6 12.75h12M6 16.5h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cp-1d2tbx"/><path class="nodwwzb4z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:community-note"} {...others} />);
}

export default Component;
