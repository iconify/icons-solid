import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aee-rob1o {
  fill: currentColor;
  d: path("M11.5 12.5H6v-1h5.5V6h1v5.5H18v1h-5.5V18h-1z");
}
</style><path class="aee-rob1o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:add-outline-sharp"} {...others} />);
}

export default Component;
