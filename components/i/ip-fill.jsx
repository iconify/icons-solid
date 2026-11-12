import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p_zi59bkf {
  fill: currentColor;
  d: path("M6 4h3a1 1 0 0 1 0 2H7v12h2a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h2V6H3a1 1 0 0 1 0-2Zm7 0h4a5 5 0 0 1 0 10h-3v5a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1m1 8h3a3 3 0 1 0 0-6h-3Z");
}
</style><path class="p_zi59bkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:ip-fill"} {...others} />);
}

export default Component;
