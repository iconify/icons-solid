import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.dfzkxi56c {
  d: path("M216 88h-48V40a8 8 0 0 0-8-8H40a8 8 0 0 0-8 8v120a8 8 0 0 0 8 8h48v48a8 8 0 0 0 8 8h120a8 8 0 0 0 8-8V96a8 8 0 0 0-8-8m-8 120H104v-48a8 8 0 0 0-8-8H48V48h104v48a8 8 0 0 0 8 8h48Z");
}

.vu-xkxsfg {
  d: path("M216 96v120H96v-56H40V40h120v56Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="vu-xkxsfg"/><path class="dfzkxi56c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:unite-square-duotone"} {...others} />);
}

export default Component;
