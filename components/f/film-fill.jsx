import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zl5wp4r3k {
  fill: currentColor;
  d: path("M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3Zm4 2V4H5a.997.997 0 0 0-1 1v2Zm14-2a1 1 0 0 0-1-1h-1v3h2ZM6 11V9H4v2Zm12 0h2V9h-2Zm-3 0H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2m-9 2H4v2h2Zm12 0v2h2v-2ZM4 19a1 1 0 0 0 1 1h1v-3H4Zm14-2v3h1a1 1 0 0 0 1-1v-2Z");
}
</style><path class="zl5wp4r3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:film-fill"} {...others} />);
}

export default Component;
