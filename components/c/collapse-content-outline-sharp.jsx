import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wh8ry1bdn {
  fill: currentColor;
  d: path("M11 13v6H9v-4H5v-2zm4-8v4h4v2h-6V5z");
}
</style><path class="wh8ry1bdn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:collapse-content-outline-sharp"} {...others} />);
}

export default Component;
