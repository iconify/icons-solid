import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lg6e5mbzo {
  fill: currentColor;
  d: path("M10 5.414V20h8v-9a1 1 0 0 1 2 0v10a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V5.414L5.707 7.707a.999.999 0 1 1-1.414-1.414l4-4a1 1 0 0 1 1.414 0l4 4a.999.999 0 1 1-1.414 1.414Z");
}
</style><path class="lg6e5mbzo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-u-turn-left-up-bulk-sharp"} {...others} />);
}

export default Component;
