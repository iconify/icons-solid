import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sascz8bmc {
  fill: currentColor;
  d: path("M4.615 20V4h6v3.289h-1V5h-4v14h4v-2.289h1V20zm8.77 0v-3.288h1V19h4V5h-4v2.289h-1V4h6v16zM11.5 14.5v-2h-2v-1h2v-2h1v2h2v1h-2v2z");
}
</style><path class="sascz8bmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:combine-columns-outline-sharp"} {...others} />);
}

export default Component;
