import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yie9aac_c {
  fill: currentColor;
  d: path("M5 8v8h2a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2Zm15-2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-3a1 1 0 0 1 0-2h2V8h-2a1 1 0 0 1 0-2Z");
}
</style><path class="yie9aac_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:brackets-fill-sharp"} {...others} />);
}

export default Component;
