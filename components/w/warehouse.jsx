import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j8ofb_8gd {
  fill: currentColor;
  d: path("M2 21V7l10-4l10 4v14h-6v-8H8v8zm7 0v-2h2v2zm2-3v-2h2v2zm2 3v-2h2v2z");
}
</style><path class="j8ofb_8gd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:warehouse"} {...others} />);
}

export default Component;
