import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pb-tgx_gh {
  fill: currentColor;
  d: path("M2 7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-1.464 3.536A5 5 0 0 1 17 22H7a5 5 0 0 1-5-5Zm11 3a1 1 0 0 0 0-2H9a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-1.586l4.293 4.293a.999.999 0 1 0 1.414-1.414L11.414 10Z");
}
</style><path class="pb-tgx_gh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:square-arrow-up-left-fill-round"} {...others} />);
}

export default Component;
