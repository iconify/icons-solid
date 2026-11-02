import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.znn34tljo {
  fill: currentColor;
  d: path("M12 16a3 3 0 0 0 3-3V9.414l-3.293 3.293a.999.999 0 1 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0l5 5a.999.999 0 1 1-1.414 1.414L17 9.414V13a5 5 0 0 1-5 5H3a1 1 0 0 1 0-2Z");
}
</style><path class="znn34tljo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-turn-right-up-bulk-round"} {...others} />);
}

export default Component;
