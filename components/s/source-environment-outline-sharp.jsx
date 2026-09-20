import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lakxgeoqh {
  fill: currentColor;
  d: path("M2 21V4.75L7 1l5 3.75V7h10v14zm2-2h2v-2H4zm0-4h2v-2H4zm0-4h2V9H4zm0-4h2V5H4zm4 0h2V5H8zm0 12h12V9H8zm6-6v-2h4v2zm0 4v-2h4v2zm-4-4v-2h2v2zm0 4v-2h2v2z");
}
</style><path class="lakxgeoqh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:source-environment-outline-sharp"} {...others} />);
}

export default Component;
