import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o6frw66jc {
  fill: currentColor;
  d: path("M3.05 12L7 8V3h10v5l4 4zM2 20v-6h20v6zm8-3.3h4v-1.5h-4z");
}
</style><path class="o6frw66jc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:range-hood-sharp"} {...others} />);
}

export default Component;
