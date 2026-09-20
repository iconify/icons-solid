import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.c5vr70bhb {
  d: path("m12 111l112 64a8 8 0 0 0 7.94 0l112-64a8 8 0 0 0 0-13.9l-112-64a8 8 0 0 0-7.94 0l-112 64a8 8 0 0 0 0 13.9");
}

.cuyn6tgcc {
  fill: currentColor;
}

.pi1wcd4wl {
  d: path("m236 137.05l-108 61.74l-108-61.74A8 8 0 1 0 12 151l112 64a8 8 0 0 0 7.94 0l112-64a8 8 0 1 0-7.94-13.9Z");
}
</style><g class="cuyn6tgcc"><path class="c5vr70bhb"/><path class="pi1wcd4wl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:stack-simple-fill"} {...others} />);
}

export default Component;
