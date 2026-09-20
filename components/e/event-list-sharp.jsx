import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pr_uhabtu {
  fill: currentColor;
  d: path("M14.616 20v-6.384H21V20zM3 17.308v-1h8.23v1zm11.616-6.924V4H21v6.385zM3 7.692v-1h8.23v1z");
}
</style><path class="pr_uhabtu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:event-list-sharp"} {...others} />);
}

export default Component;
