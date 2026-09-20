import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.to-j83byk {
  fill: currentColor;
  d: path("M7 17V7h10v10zm-4 0v-2h2v2zm0-8V7h2v2zm4 12v-2h2v2zM7 5V3h2v2zm8 16v-2h2v2zm0-16V3h2v2zm4 12v-2h2v2zm0-8V7h2v2z");
}
</style><path class="to-j83byk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:switch-access"} {...others} />);
}

export default Component;
