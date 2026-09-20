import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ak_p5sw8j {
  d: path("m221.66 90.34l-48-48a8 8 0 0 0-11.32 0l-48 48A8 8 0 0 0 120 104h40v80H24a8 8 0 0 0 0 16h144a8 8 0 0 0 8-8v-88h40a8 8 0 0 0 5.66-13.66M139.31 88L168 59.31L196.69 88Z");
}

.andqlfogi {
  d: path("M216 96h-96l48-48Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.cuyn6tgcc {
  fill: currentColor;
}
</style><g class="cuyn6tgcc"><path class="andqlfogi"/><path class="ak_p5sw8j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-elbow-right-up-duotone"} {...others} />);
}

export default Component;
