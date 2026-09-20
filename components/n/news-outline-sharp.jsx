import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u5lgtfbzi {
  fill: currentColor;
  d: path("M4 20V4h11.577L20 8.423V20zm1-1h14V9h-4V5H5zm2.5-3h9v-1h-9zm0-7H12V8H7.5zm0 3.5h9v-1h-9zM5 5v4zv14z");
}
</style><path class="u5lgtfbzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:news-outline-sharp"} {...others} />);
}

export default Component;
