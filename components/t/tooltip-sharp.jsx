import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yey0pshjj {
  fill: currentColor;
  d: path("m12 22l-2.675-4H2V2h20v16h-7.325z");
}
</style><path class="yey0pshjj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tooltip-sharp"} {...others} />);
}

export default Component;
