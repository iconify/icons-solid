import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y8uvlibxn {
  fill: currentColor;
  d: path("M13 19L2 12l11-7l-3.425 6H22v2H9.575z");
}
</style><path class="y8uvlibxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:line-start-arrow-notch"} {...others} />);
}

export default Component;
