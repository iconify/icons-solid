import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y-d78hkpq {
  fill: currentColor;
  d: path("M8 11h8V4a1 1 0 0 1 2 0v16a1 1 0 0 1-2 0v-7H8v7a1 1 0 0 1-2 0V4a1 1 0 0 1 2 0Z");
}
</style><path class="y-d78hkpq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:letter-h-bulk-round"} {...others} />);
}

export default Component;
