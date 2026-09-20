import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.md9y-bcnh {
  fill: currentColor;
  d: path("M8 21v-2h8v2zm0-3L6.825 3h10.35L16 18zm1.85-2h4.3L15 5H9zm0-11H9h6z");
}
</style><path class="md9y-bcnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:on-hub-device-outline-sharp"} {...others} />);
}

export default Component;
