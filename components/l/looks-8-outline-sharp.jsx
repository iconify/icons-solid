import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r4rzt5b1f {
  fill: currentColor;
  d: path("M3 21V3h18v18zm2-2h14V5H5zm0 0V5zm4-2h6v-4l-1-1l1-1V7H9v4l1 1l-1 1zm2-6V9h2v2zm0 4v-2h2v2z");
}
</style><path class="r4rzt5b1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:looks-8-outline-sharp"} {...others} />);
}

export default Component;
