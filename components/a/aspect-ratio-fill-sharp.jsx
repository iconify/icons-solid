import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vtukr91vt {
  fill: currentColor;
  d: path("M2 19V5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1m4-7a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2H7a1 1 0 0 0-1 1Zm12 0a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h3a1 1 0 0 0 1-1Z");
}
</style><path class="vtukr91vt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:aspect-ratio-fill-sharp"} {...others} />);
}

export default Component;
