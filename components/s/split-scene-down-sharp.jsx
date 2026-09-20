import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p1g2yxbvr {
  fill: currentColor;
  d: path("M4 9V3h16v6zm0 12v-8H2v-2h20v2h-2v8z");
}
</style><path class="p1g2yxbvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:split-scene-down-sharp"} {...others} />);
}

export default Component;
