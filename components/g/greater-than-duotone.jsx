import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.oipnty0yy {
  d: path("M224 128a8 8 0 0 1-4.58 7.23l-152 72a8 8 0 1 1-6.85-14.46L197.31 128L60.58 63.23a8 8 0 1 1 6.85-14.46l152 72A8 8 0 0 1 224 128");
}

.rwq9m3nju {
  d: path("M216 128L64 200V56Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="rwq9m3nju"/><path class="oipnty0yy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:greater-than-duotone"} {...others} />);
}

export default Component;
