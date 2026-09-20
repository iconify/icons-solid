import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.co49_nbhh {
  d: path("M208 200H48l80-80Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cuyn6tgcc {
  fill: currentColor;
}

.z2ur62bkp {
  d: path("M133.66 114.34a8 8 0 0 0-11.32 0l-80 80A8 8 0 0 0 48 208h160a8 8 0 0 0 5.66-13.66ZM67.31 192L128 131.31L188.69 192Zm-25-66.34a8 8 0 0 1 0-11.32l80-80a8 8 0 0 1 11.32 0l80 80a8 8 0 0 1-11.32 11.32L128 51.31l-74.34 74.35a8 8 0 0 1-11.32 0Z");
}
</style><g class="cuyn6tgcc"><path class="co49_nbhh"/><path class="z2ur62bkp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:caret-double-up-duotone"} {...others} />);
}

export default Component;
