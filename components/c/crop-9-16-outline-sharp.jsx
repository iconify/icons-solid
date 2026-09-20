import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.brxko0bmj {
  fill: currentColor;
  d: path("M7 21V3h10v18zM9 5v14h6V5zm0 14V5z");
}
</style><path class="brxko0bmj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:crop-9-16-outline-sharp"} {...others} />);
}

export default Component;
