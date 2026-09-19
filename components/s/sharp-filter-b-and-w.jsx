import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bm8qffoxq {
  fill: currentColor;
  d: path("M21 3H3v18h18zm-2 16l-7-8v8H5l7-8V5h7z");
}
</style><path class="bm8qffoxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-filter-b-and-w"} {...others} />);
}

export default Component;
