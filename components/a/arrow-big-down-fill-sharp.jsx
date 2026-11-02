import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.t6345wbvn {
  fill: currentColor;
  d: path("M15 3a1 1 0 0 1 1 1v7h4a1.002 1.002 0 0 1 .707 1.707l-8 8a1 1 0 0 1-1.414 0l-8-8A1 1 0 0 1 4 11h4V4a1 1 0 0 1 1-1Z");
}
</style><path class="t6345wbvn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:arrow-big-down-fill-sharp"} {...others} />);
}

export default Component;
