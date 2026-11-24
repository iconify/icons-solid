import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z55qg0bll {
  fill: currentColor;
  d: path("M4 12a8 8 0 0 1 8-8h7a1 1 0 0 1 0 2h-7a6 6 0 0 0-6 6v7a1 1 0 0 1-2 0Z");
}
</style><path class="z55qg0bll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:corner-regular-bulk-sharp"} {...others} />);
}

export default Component;
