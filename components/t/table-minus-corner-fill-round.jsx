import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.blz8tvbof {
  fill: currentColor;
  d: path("M11 8H3a5 5 0 0 1 5-5h3Zm2 0V3h3a5 5 0 0 1 5 5ZM3 14v-4h7v4Zm10 1h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2m-3 1v4a1 1 0 0 1-1 1H8a5 5 0 0 1-5-5Z");
}
</style><path class="blz8tvbof"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:table-minus-corner-fill-round"} {...others} />);
}

export default Component;
