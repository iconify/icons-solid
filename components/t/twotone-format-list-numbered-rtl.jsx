import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fo3dloltf {
  fill: currentColor;
  d: path("M2 11h14v2H2zm16 6h2v.5h-1v1h1v.5h-2v1h3v-4h-3zm0-6h1.8L18 13.1v.9h3v-1h-1.8l1.8-2.1V10h-3zm2-3V4h-2v1h1v3zM2 17h14v2H2zM2 5h14v2H2z");
}
</style><path class="fo3dloltf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-format-list-numbered-rtl"} {...others} />);
}

export default Component;
