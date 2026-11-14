import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n218y2bdj {
  d: path("M5.5 9V3h13v6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zlcmmebux {
  d: path("M8.5 6h7v6.5h-7Zm0 9.5l-4.5 6m11.5-6l4.5 6");
}
</style><g class="ulnmmdpxh"><path class="n218y2bdj"/><path class="zlcmmebux"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:stage-lights"} {...others} />);
}

export default Component;
