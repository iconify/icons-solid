import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gionrr78c {
  fill: currentColor;
  d: path("M6 16h9v-5H6zm10.5-3H18V8H9v1.5h7.5zM2 20V4h20v16z");
}
</style><path class="gionrr78c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:desktop-landscape-sharp"} {...others} />);
}

export default Component;
