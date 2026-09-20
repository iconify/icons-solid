import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.w1yjc8buj {
  fill: currentColor;
  d: path("M16 21V8H9.5V3H21v18zm-6.5 0V10H14v11zM3 21V10h4.5v11z");
}
</style><path class="w1yjc8buj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:responsive-layout-sharp"} {...others} />);
}

export default Component;
