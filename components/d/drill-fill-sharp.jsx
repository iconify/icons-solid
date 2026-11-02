import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b6pe25bjv {
  fill: currentColor;
  d: path("M15 3a1 1 0 0 1 1 1h2a1 1 0 0 1 1 1v1h2a1 1 0 0 1 0 2h-2v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1 1h-3v4h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h1v-4H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z");
}
</style><path class="b6pe25bjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:drill-fill-sharp"} {...others} />);
}

export default Component;
