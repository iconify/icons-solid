import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e5du9ebef {
  fill: currentColor;
  d: path("M2 7V5a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3v2Zm20 0h-7V5a3 3 0 0 1 3-3h1a3 3 0 0 1 3 3ZM2 9h7v3a3 3 0 1 0 6 0V9h7v3c0 5.523-4.477 10-10 10S2 17.523 2 12Z");
}
</style><path class="e5du9ebef"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:magnet-fill-round"} {...others} />);
}

export default Component;
