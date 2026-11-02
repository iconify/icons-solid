import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r0f4p2b2w {
  fill: currentColor;
  d: path("M16 7a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-3.586l-6.293 6.293a.999.999 0 1 1-1.414-1.414L13.586 9H10a1 1 0 0 1 0-2Z");
}
</style><path class="r0f4p2b2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-up-right-small-bulk"} {...others} />);
}

export default Component;
