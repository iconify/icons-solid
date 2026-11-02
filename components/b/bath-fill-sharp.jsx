import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f97gd8bcn {
  fill: currentColor;
  d: path("M4 4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V5H6v6h15a1 1 0 0 1 0 2h-1v5a1 1 0 0 1-1 1h-2v1a1 1 0 0 1-2 0v-1H9v1a1 1 0 0 1-2 0v-1H5a1 1 0 0 1-1-1v-5H3a1 1 0 0 1 0-2h1Z");
}
</style><path class="f97gd8bcn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:bath-fill-sharp"} {...others} />);
}

export default Component;
