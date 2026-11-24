import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gzy621tzx {
  fill: currentColor;
  d: path("M7 8.099V7a5 5 0 0 1 10 0v1.099A5.01 5.01 0 0 1 21 13v4a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 22H8a5 5 0 0 1-5-5v-4a5.01 5.01 0 0 1 4-4.901M15 7a3 3 0 1 0-6 0v1h6Zm-6 9h6a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2");
}
</style><path class="gzy621tzx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:lock-minus-fill-round"} {...others} />);
}

export default Component;
