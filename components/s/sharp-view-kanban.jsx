import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.phy25iykj {
  fill: currentColor;
  d: path("M21 3H3v18h18zM9 17H7V7h2zm4-5h-2V7h2zm4 3h-2V7h2z");
}
</style><path class="phy25iykj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-view-kanban"} {...others} />);
}

export default Component;
