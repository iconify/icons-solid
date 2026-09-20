import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bbukqtlin {
  fill: currentColor;
  d: path("M9 21v-6H3V3h12v6h6v12z");
}
</style><path class="bbukqtlin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:stack-group-sharp"} {...others} />);
}

export default Component;
