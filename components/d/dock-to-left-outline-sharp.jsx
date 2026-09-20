import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fqwjjtbma {
  fill: currentColor;
  d: path("M16 19h3V5h-3zM5 19h9V5H5zm11 0h3zM3 21V3h18v18z");
}
</style><path class="fqwjjtbma"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:dock-to-left-outline-sharp"} {...others} />);
}

export default Component;
