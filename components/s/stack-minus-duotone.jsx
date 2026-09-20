import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.hh5u20bpy {
  d: path("m224 80l-96 56l-96-56l96-56Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.tbt8x3ntj {
  d: path("M240 200a8 8 0 0 1-8 8h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 8 8m-20-78.91l-92 53.65l-92-53.65a8 8 0 0 0-8 13.82l96 56a8 8 0 0 0 8.06 0l96-56a8 8 0 1 0-8.06-13.82M24 80a8 8 0 0 1 4-6.91l96-56a8 8 0 0 1 8.06 0l96 56a8 8 0 0 1 0 13.82l-96 56a8 8 0 0 1-8.06 0l-96-56A8 8 0 0 1 24 80m23.88 0L128 126.74L208.12 80L128 33.26ZM140 215.76l-12 7l-92-53.67a8 8 0 0 0-8 13.82l96 56a8 8 0 0 0 8.06 0l16-9.33a8 8 0 1 0-8.06-13.82");
}
</style><g class="cuyn6tgcc"><path class="hh5u20bpy"/><path class="tbt8x3ntj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:stack-minus-duotone"} {...others} />);
}

export default Component;
