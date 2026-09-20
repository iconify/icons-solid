import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.bcptobbzw {
  d: path("M192 40v152H40Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cuyn6tgcc {
  fill: currentColor;
}

.qhi95kold {
  d: path("M195.06 32.61a8 8 0 0 0-8.72 1.73l-152 152A8 8 0 0 0 40 200h152a8 8 0 0 0 8-8V40a8 8 0 0 0-4.94-7.39M184 184H59.31L184 59.31Z");
}
</style><g class="cuyn6tgcc"><path class="bcptobbzw"/><path class="qhi95kold"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:notches-duotone"} {...others} />);
}

export default Component;
