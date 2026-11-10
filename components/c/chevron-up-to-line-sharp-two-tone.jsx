import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ab-ub450t {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M11.327 10.26C11.72 9.94 12.341 9.93 12.707 10.29L19 16.59L17.586 18L12 12.42L6.414 18L5 16.59L11.327 10.26Z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.nihf69b1j {
  fill-rule: evenodd;
  d: path("M20 8H4V6H20V8Z");
}
</style><g class="cuyn6tgcc"><path class="ab-ub450t"/><path clip-rule="evenodd" class="nihf69b1j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chevron-up-to-line-sharp-two-tone"} {...others} />);
}

export default Component;
