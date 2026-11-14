import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h13yrbc5z {
  d: path("M5.5 16.5c0-6.5 4-9 10.5-9c0 6.5-4 9-10.5 9Zm0 0l6-5");
}

.s2b5yii1k {
  d: path("M2.5 4.5H19v15H2.5Zm19 5.5v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s2b5yii1k"/><path class="h13yrbc5z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:leaf-battery"} {...others} />);
}

export default Component;
