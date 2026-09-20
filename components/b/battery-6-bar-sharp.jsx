import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hg24okw6w {
  fill: currentColor;
  d: path("M7 22V4h3V2h4v2h3v18zM9 8h6V6H9z");
}
</style><path class="hg24okw6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:battery-6-bar-sharp"} {...others} />);
}

export default Component;
