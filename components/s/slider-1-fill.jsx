import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f9dfygx3l {
  fill: currentColor;
  d: path("M3 10a1 1 0 0 1 0-2h10.171a3 3 0 0 1 5.658 0H21a1 1 0 0 1 0 2h-2.171a3 3 0 0 1-5.658 0Zm0 6a1 1 0 0 1 0-2h2.171a3 3 0 0 1 5.658 0H21a1 1 0 0 1 0 2H10.829a3 3 0 0 1-5.658 0Z");
}
</style><path class="f9dfygx3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:slider-1-fill"} {...others} />);
}

export default Component;
