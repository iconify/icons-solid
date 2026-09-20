import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ccmaxdsxo {
  fill: currentColor;
  d: path("M11 21V11h10v10zm-4-3.77V7h10.23v1H8v9.23zm-4-4V3h10.23v1H4v9.23z");
}
</style><path class="ccmaxdsxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:auto-awesome-motion-sharp"} {...others} />);
}

export default Component;
