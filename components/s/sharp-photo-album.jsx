import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nu3o9obiz {
  fill: currentColor;
  d: path("M20 2H4v20h16zm-9 2h5v7l-2.5-1.5L11 11zM7 18l2.38-3.17L11 17l2.62-3.5L17 18z");
}
</style><path class="nu3o9obiz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-photo-album"} {...others} />);
}

export default Component;
