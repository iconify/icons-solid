import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cas7lohbe {
  fill: currentColor;
  d: path("M4 18h4.673V6H4zm5.673 0h4.654V6H9.673zm5.654 0H20V6h-4.673zM21 19H3V5h18z");
}
</style><path class="cas7lohbe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:view-week-outline-sharp"} {...others} />);
}

export default Component;
