import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l-xu7__wf {
  fill: currentColor;
  d: path("m12 6l-2-2H2v16h20V6zm7 11h-6V9h3.5l2.5 2.5zm-3.12-6.5l1.62 1.62v3.38h-3v-5z");
}
</style><path class="l-xu7__wf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-snippet-folder"} {...others} />);
}

export default Component;
