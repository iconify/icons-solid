import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i2y10x-if {
  fill: currentColor;
  d: path("M2 19V5h20v14zm3.5-1h13V6h-13z");
}
</style><path class="i2y10x-if"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:tablet-sharp"} {...others} />);
}

export default Component;
