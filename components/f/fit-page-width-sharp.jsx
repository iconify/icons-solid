import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c6u6youio {
  fill: currentColor;
  d: path("M9 15V9l-3 3zm9-3l-3-3v6zM2 20V4h20v16z");
}
</style><path class="c6u6youio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:fit-page-width-sharp"} {...others} />);
}

export default Component;
