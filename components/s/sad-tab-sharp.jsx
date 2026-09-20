import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ohzrwtbkp {
  fill: currentColor;
  d: path("M7.5 16.5H9V15h6v1.5h1.5V15H15v-1.5H9V15H7.5ZM8 12h1.5V9.5H8Zm6.5 0H16V9.5h-1.5ZM2 20V4h8l2 2h10v14Z");
}
</style><path class="ohzrwtbkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:sad-tab-sharp"} {...others} />);
}

export default Component;
