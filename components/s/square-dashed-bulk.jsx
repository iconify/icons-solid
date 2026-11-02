import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p0fhwg_5e {
  fill: currentColor;
  d: path("M2 5a3 3 0 0 1 3-3h1a1 1 0 0 1 0 2H5a.997.997 0 0 0-1 1v1a1 1 0 0 1-2 0Zm12-3a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2Zm5 0a3 3 0 0 1 3 3v1a1 1 0 0 1-2 0V5a1 1 0 0 0-1-1h-1a1 1 0 0 1 0-2ZM2 10a1 1 0 0 1 2 0v4a1 1 0 0 1-2 0Zm20 4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0ZM5 22a3 3 0 0 1-3-3v-1a1 1 0 0 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 1 0 2Zm17-3a3 3 0 0 1-3 3h-1a1 1 0 0 1 0-2h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 2 0Zm-12 3a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2Z");
}
</style><path class="p0fhwg_5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:square-dashed-bulk"} {...others} />);
}

export default Component;
