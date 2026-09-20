import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ibepfewaa {
  fill: currentColor;
  d: path("M18.6 20L7 8.4V15H5V5h10v2H8.4L20 18.6z");
}
</style><path class="ibepfewaa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:north-west-sharp"} {...others} />);
}

export default Component;
