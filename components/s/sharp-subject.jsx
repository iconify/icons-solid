import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.py0fbwqdu {
  fill: currentColor;
  d: path("M14 17H4v2h10zm6-8H4v2h16zM4 15h16v-2H4zM4 5v2h16V5z");
}
</style><path class="py0fbwqdu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-subject"} {...others} />);
}

export default Component;
