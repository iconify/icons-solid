import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.puna2gbcw {
  fill: currentColor;
  d: path("M7 2h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m5.01 4H12a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2M8 14a4 4 0 1 0 8 0a4 4 0 0 0-8 0");
}
</style><path class="puna2gbcw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:speaker-fill"} {...others} />);
}

export default Component;
