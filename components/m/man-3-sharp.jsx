import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b7_64-7kh {
  fill: currentColor;
  d: path("M10 22.25v-7H8v-8h8v8h-2v7zM12 6.5L9.75 4.25L12 2l2.25 2.25z");
}
</style><path class="b7_64-7kh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:man-3-sharp"} {...others} />);
}

export default Component;
