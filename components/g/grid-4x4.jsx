import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hamluwbgi {
  fill: currentColor;
  d: path("M6.5 20.5v-3h-3v-1h3v-4h-3v-1h3v-4h-3v-1h3v-3h1v3h4v-3h1v3h4v-3h1v3h3v1h-3v4h3v1h-3v4h3v1h-3v3h-1v-3h-4v3h-1v-3h-4v3zm1-4h4v-4h-4zm5 0h4v-4h-4zm-5-5h4v-4h-4zm5 0h4v-4h-4z");
}
</style><path class="hamluwbgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:grid-4x4"} {...others} />);
}

export default Component;
