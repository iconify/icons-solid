import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dhgnuxbbp {
  fill: currentColor;
  d: path("m17 16l-1.4-1.4l1.575-1.6H11v-2h6.175L15.6 9.4L17 8l4 4zM5 19h2V5H5zm-2 2V3h6v18zm8 0v-2h2v2zm0-16V3h2v2zm4 16v-2h2v2zm0-16V3h2v2zm4 16v-2h2v2zm0-16V3h2v2zM5 19h2z");
}
</style><path class="dhgnuxbbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:text-select-move-forward-word-outline-sharp"} {...others} />);
}

export default Component;
