import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y96sitbtz {
  fill: currentColor;
  d: path("M13 13.9a5 5 0 1 0-2 0v4.27l-1.59-1.59L8 18l4 4l4-4l-1.41-1.41L13 18.17zM15 9c0 1.66-1.34 3-3 3s-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3");
}
</style><path class="y96sitbtz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-swipe-down-alt"} {...others} />);
}

export default Component;
