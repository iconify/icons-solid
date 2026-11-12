import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gfq6j8nae {
  fill: currentColor;
  d: path("M3 5h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m0 12h6a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m10 0h.01a1 1 0 0 1 0 2H13a1 1 0 0 1 0-2m4 0h.01a1 1 0 0 1 0 2H17a1 1 0 0 1 0-2m4 2h-.01a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2");
}
</style><path class="gfq6j8nae"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:text-truncate-fill-sharp"} {...others} />);
}

export default Component;
