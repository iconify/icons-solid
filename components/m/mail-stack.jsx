import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jg7dhrbvi {
  d: path("M5.5 4.5h14a2 2 0 0 1 2 2v10");
}

.majqov-ge {
  d: path("M2.5 7.5h16V20h-16Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zf0ibxbza {
  d: path("m6 11l4.5 3l4.5-3");
}
</style><g class="ulnmmdpxh"><path class="majqov-ge"/><path class="jg7dhrbvi"/><path class="zf0ibxbza"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:mail-stack"} {...others} />);
}

export default Component;
