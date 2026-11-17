import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lr08hd01l {
  fill: currentColor;
  d: path("M3 22a1 1 0 0 1 0-2v-8.185a5 5 0 0 1 1.707-3.763l4-3.5a5 5 0 0 1 6.586 0l4 3.5A5 5 0 0 1 21 11.815V20a1 1 0 0 1 0 2Zm11-5a2 2 0 1 0-4 0v3h4Z");
}
</style><path class="lr08hd01l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:house-alt-2-fill-round"} {...others} />);
}

export default Component;
