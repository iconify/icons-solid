import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ep_njeuxy {
  fill: currentColor;
  d: path("M1 21V9h2v2h2V3h2v2h2V3h2v2h2V3h2v2h2V3h2v8h2V9h2v12h-9v-3q0-.825-.587-1.412T12 16t-1.412.588T10 18v3zm8-9h2V9H9zm4 0h2V9h-2z");
}
</style><path class="ep_njeuxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:castle"} {...others} />);
}

export default Component;
