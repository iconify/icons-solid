import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b2me6_b9a {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M18 6.41L12.414 12L18 17.59L16.586 19L10.293 12.71C9.902 12.32 9.902 11.68 10.293 11.29L16.586 5L18 6.41Z");
}

.bd7z_sb4k {
  fill-rule: evenodd;
  d: path("M8 20H6V4H8V20Z");
}

.cuyn6tgcc {
  fill: currentColor;
}
</style><g class="cuyn6tgcc"><path class="b2me6_b9a"/><path clip-rule="evenodd" class="bd7z_sb4k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:chevron-left-to-line-sharp-two-tone"} {...others} />);
}

export default Component;
