import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qy9-7pbeq {
  fill: currentColor;
  d: path("M4 20V4h16v16zm8.308-8.308h.884V6.308h-.884zm3.038 0h1.085L14.277 9l2.154-2.692h-1.085L13.192 9zm-8.038 0h3.384v-.884h-2.5V9.442h2.5V6.308H7.308v.884h2.5v1.366h-2.5zM19 12.616v-1.347l-6 6l-4-4l-4 4v1.347l4-4l4 4z");
}
</style><path class="qy9-7pbeq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:score-sharp"} {...others} />);
}

export default Component;
