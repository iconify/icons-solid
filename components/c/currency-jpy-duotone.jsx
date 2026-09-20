import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.bmm4vqfrm {
  d: path("M206.19 53.07L144.88 128H176a8 8 0 0 1 0 16h-40v16h40a8 8 0 0 1 0 16h-40v40a8 8 0 0 1-16 0v-40H80a8 8 0 0 1 0-16h40v-16H80a8 8 0 0 1 0-16h31.12L49.81 53.07a8 8 0 0 1 12.38-10.14L128 123.37l65.81-80.44a8 8 0 1 1 12.38 10.14");
}

.cuyn6tgcc {
  fill: currentColor;
}

.k6lke6bob {
  d: path("m200 48l-72 88l-72-88Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="k6lke6bob"/><path class="bmm4vqfrm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:currency-jpy-duotone"} {...others} />);
}

export default Component;
