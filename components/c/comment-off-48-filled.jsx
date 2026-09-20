import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.eg9tl5b8z {
  fill: currentColor;
  d: path("m34.232 36l7.634 7.634a1.25 1.25 0 0 0 1.768-1.768l-37.5-37.5a1.25 1.25 0 1 0-1.768 1.768l1.875 1.875A7.23 7.23 0 0 0 4 13.25v15.5A7.25 7.25 0 0 0 11.25 36H12v5.82c0 1.824 2.057 2.89 3.547 1.838L26.398 36zM11.303 6L40.35 35.045A7.25 7.25 0 0 0 44 28.75v-15.5A7.25 7.25 0 0 0 36.75 6z");
}
</style><path class="eg9tl5b8z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:comment-off-48-filled"} {...others} />);
}

export default Component;
