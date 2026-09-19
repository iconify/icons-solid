import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j_mjssbjx {
  fill: currentColor;
  d: path("M22 2H2v20l4-4h16zm-9 9h-2V5h2zm0 4h-2v-2h2z");
}
</style><path class="j_mjssbjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-announcement"} {...others} />);
}

export default Component;
