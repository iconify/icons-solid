import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gd18994yc {
  fill: currentColor;
  d: path("M13 5v14a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0");
}
</style><path class="gd18994yc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:tally-1-bulk-sharp"} {...others} />);
}

export default Component;
