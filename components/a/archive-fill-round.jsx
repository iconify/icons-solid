import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vfvcbrbyx {
  fill: currentColor;
  d: path("M5 3h14a3 3 0 0 1 1 5.829V16a5 5 0 0 1-1.464 3.536A5 5 0 0 1 15 21H9a5 5 0 0 1-5-5V8.829A3.001 3.001 0 0 1 5 3m1 6v7a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V9Zm8 2a1 1 0 0 1 0 2h-4a1 1 0 0 1 0-2Z");
}
</style><path class="vfvcbrbyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:archive-fill-round"} {...others} />);
}

export default Component;
