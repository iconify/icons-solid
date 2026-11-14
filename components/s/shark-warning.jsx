import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gr0js910o {
  d: path("m12 3l9.5 17h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uq89zgw5n {
  d: path("M8 16.5c1.5-2 3-5.5 6.5-7v7Z");
}
</style><g class="ulnmmdpxh"><path class="gr0js910o"/><path class="uq89zgw5n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:shark-warning"} {...others} />);
}

export default Component;
