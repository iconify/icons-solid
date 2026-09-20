import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u0jcrbcgr {
  fill: currentColor;
  d: path("M8 21v-6H3l9-11l9 11h-5v6z");
}
</style><path class="u0jcrbcgr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:arrow-shape-up"} {...others} />);
}

export default Component;
