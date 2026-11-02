import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cfqqx6mhr {
  fill: currentColor;
  d: path("M8 3h3v5H3a5 5 0 0 1 5-5m5 5V3h3a5 5 0 0 1 5 5ZM3 10h8v4H3Zm18 4h-8v-4h8Zm-10 2v5H8a5 5 0 0 1-5-5Zm2 5v-5h8a5 5 0 0 1-1.464 3.536A5 5 0 0 1 16 21Z");
}
</style><path class="cfqqx6mhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:table-fill-round"} {...others} />);
}

export default Component;
