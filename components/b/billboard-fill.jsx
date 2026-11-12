import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iifsikkie {
  fill: currentColor;
  d: path("M5 2h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-1v5a1 1 0 0 1-2 0v-5H8v5a1 1 0 0 1-2 0v-5H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m12 4H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2m-4 4H7a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2");
}
</style><path class="iifsikkie"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:billboard-fill"} {...others} />);
}

export default Component;
