import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wiwd-8b5c {
  fill: currentColor;
  d: path("M7 17h2V7H7zm4-5h2V7h-2zm4 3h2V7h-2zM3 21V3h18v18z");
}
</style><path class="wiwd-8b5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:view-kanban-sharp"} {...others} />);
}

export default Component;
