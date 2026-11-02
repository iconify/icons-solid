import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m538sebkk {
  fill: currentColor;
  d: path("M4 5h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2m3 6h10a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2m3 6h4a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2");
}
</style><path class="m538sebkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:list-filter-fill-round"} {...others} />);
}

export default Component;
