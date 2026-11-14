import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mvsjf4krm {
  d: path("M10 8.5h5.5V14");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x8ki74y9y {
  d: path("M3 3h18v18H3Zm5.5 12.5l7-7");
}
</style><g class="ulnmmdpxh"><path class="x8ki74y9y"/><path class="mvsjf4krm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:shortcut"} {...others} />);
}

export default Component;
