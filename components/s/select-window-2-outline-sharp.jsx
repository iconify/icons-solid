import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m_j4it4yx {
  fill: currentColor;
  d: path("M4 20h12v-9H4zm14-5v-2h2V4H8v5H6V2h16v13zM2 22V9h16v13zm8-6.5");
}
</style><path class="m_j4it4yx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:select-window-2-outline-sharp"} {...others} />);
}

export default Component;
