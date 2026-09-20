import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.p2w5yo1lz {
  fill: currentColor;
  d: path("M3 21V3h18v18z");
}
</style><path class="p2w5yo1lz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:square-sharp"} {...others} />);
}

export default Component;
