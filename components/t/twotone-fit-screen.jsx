import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g8afmhb3d {
  fill: currentColor;
  d: path("M6 16h12V8H6zm2-6h8v4H8zm-4 5H2v3c0 1.1.9 2 2 2h3v-2H4zm0-9h3V4H4c-1.1 0-2 .9-2 2v3h2zm16-2h-3v2h3v3h2V6c0-1.1-.9-2-2-2m0 14h-3v2h3c1.1 0 2-.9 2-2v-3h-2z");
}

.z48tb7f7w {
  fill: currentColor;
  d: path("M8 10h8v4H8z");
  opacity: var(--svg-opacity--0-3, 0.3);
}
</style><path class="z48tb7f7w"/><path class="g8afmhb3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-fit-screen"} {...others} />);
}

export default Component;
