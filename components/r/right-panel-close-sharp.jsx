import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.om7i8tbvs {
  fill: currentColor;
  d: path("m7.5 16l4-4l-4-4zM5 19h9V5H5zm-2 2V3h18v18z");
}
</style><path class="om7i8tbvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:right-panel-close-sharp"} {...others} />);
}

export default Component;
