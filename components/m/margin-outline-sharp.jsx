import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uz-ke3zem {
  fill: currentColor;
  d: path("M4 20V4h16v16zm1-1h14V5H5zm0 0V5zM7.346 8.904V7.365h1.538v1.539zm3.885 0V7.365h1.538v1.539zm3.885 0V7.365h1.538v1.539zm-7.77 3.865v-1.538h1.539v1.538zm3.885 0v-1.538h1.538v1.538zm3.885 0v-1.538h1.538v1.538z");
}
</style><path class="uz-ke3zem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:margin-outline-sharp"} {...others} />);
}

export default Component;
