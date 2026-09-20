import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h38-270aj {
  fill: currentColor;
  d: path("m1 18l6-8l4.5 6H19l-5-6.65l-2.5 3.3L10.25 11L14 6l9 12zm4-2h4l-2-2.675zm0 0h4z");
}
</style><path class="h38-270aj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:landscape-outline"} {...others} />);
}

export default Component;
