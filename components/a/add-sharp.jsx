import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vzffklbwm {
  fill: currentColor;
  d: path("M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z");
}
</style><path class="vzffklbwm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:add-sharp"} {...others} />);
}

export default Component;
