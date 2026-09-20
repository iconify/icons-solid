import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v2zu31-zx {
  fill: currentColor;
  d: path("M14 16h3V8h-3zm-3 3V5h9v14zm-5 0V8H4V5h5v14z");
}
</style><path class="v2zu31-zx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:timer-10-sharp"} {...others} />);
}

export default Component;
