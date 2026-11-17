import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pk5-idbpm {
  fill: currentColor;
  d: path("M11 7H2V6a3 3 0 0 1 3-3h6Zm11 0h-9V3h6a3 3 0 0 1 3 3ZM7 9v2H2V9Zm2 0h6v2H9Zm8 2V9h5v2Zm-6 2v2H2v-2Zm11 0v2h-9v-2ZM7 17v4H5a3 3 0 0 1-3-3v-1Zm8 0v4H9v-4Zm7 0v1a3 3 0 0 1-3 3h-2v-4Z");
}
</style><path class="pk5-idbpm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:brick-wall-fill"} {...others} />);
}

export default Component;
