import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.y9k_hgbep {
  d: path("M160 48v160l-80-80Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.zk8a93bgb {
  d: path("M163.06 40.61a8 8 0 0 0-8.72 1.73l-80 80a8 8 0 0 0 0 11.32l80 80A8 8 0 0 0 168 208V48a8 8 0 0 0-4.94-7.39M152 188.69L91.31 128L152 67.31Z");
}
</style><g class="cuyn6tgcc"><path class="y9k_hgbep"/><path class="zk8a93bgb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:caret-left-duotone"} {...others} />);
}

export default Component;
