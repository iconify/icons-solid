import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.de_v7eb0n {
  fill: currentColor;
  d: path("M6 4a1 1 0 0 1 1.848-.53L16 16.513V4a1 1 0 0 1 2 0v16a1 1 0 0 1-1.848.53L8 7.487V20a1 1 0 0 1-2 0Z");
}
</style><path class="de_v7eb0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:letter-n-fill-round"} {...others} />);
}

export default Component;
