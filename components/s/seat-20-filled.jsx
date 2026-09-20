import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.m-hihh-6m {
  fill: currentColor;
  d: path("M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3.764a2.997 2.997 0 0 0-4.5.577A3 3 0 0 0 10 9a3 3 0 0 0-2.5 1.341A2.997 2.997 0 0 0 3 9.764zm9 6a2 2 0 1 0-4 0v5h4zm1 5h2a2 2 0 0 0 2-2v-3a2 2 0 1 0-4 0zm-6 0H5a2 2 0 0 1-2-2v-3a2 2 0 1 1 4 0z");
}
</style><path class="m-hihh-6m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:seat-20-filled"} {...others} />);
}

export default Component;
