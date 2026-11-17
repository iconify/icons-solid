import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z2jrx7w-y {
  fill: currentColor;
  d: path("M19 3v2h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0V7h-2a1 1 0 0 1 0-2h2V3a1 1 0 0 1 2 0M3 5h8a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m14 7a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Zm-3 7a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2Z");
}
</style><path class="z2jrx7w-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:list-filter-plus-fill"} {...others} />);
}

export default Component;
