import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hi1pf1b0e {
  fill: currentColor;
  d: path("M9 16h2V8H9zm4 0h2V8h-2zM2 20V4h20v16z");
}
</style><path class="hi1pf1b0e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:pause-presentation-sharp"} {...others} />);
}

export default Component;
