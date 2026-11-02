import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.epyks-d-m {
  fill: currentColor;
  d: path("M9 2v4a1 1 0 0 0 2 0V2h2v4a1 1 0 0 0 2 0V2h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-3v4a3 3 0 1 1-6 0v-4H6a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1ZM7 13h3a1 1 0 0 1 1 1v5a1 1 0 0 0 2 0v-5a1 1 0 0 1 1-1h3v-2H7Z");
}
</style><path class="epyks-d-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:brush-fill-sharp"} {...others} />);
}

export default Component;
