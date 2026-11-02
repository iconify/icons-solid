import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wx67hug8p {
  fill: currentColor;
  d: path("M11 8H3V4a1 1 0 0 1 1-1h7Zm2 0V3h7a1 1 0 0 1 1 1v4ZM3 14v-4h7v4Zm10 1h8a1 1 0 0 1 0 2h-8a1 1 0 0 1 0-2m-3 1v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4Z");
}
</style><path class="wx67hug8p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:table-minus-corner-fill-sharp"} {...others} />);
}

export default Component;
