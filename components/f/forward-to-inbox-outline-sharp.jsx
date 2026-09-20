import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yisenpehl {
  fill: currentColor;
  d: path("M12 13L4 8v10h9v2H2V4h20v9h-2V8zm0-2l8-5H4zm7 12l-1.4-1.4l1.575-1.6H15v-2h4.175l-1.6-1.6L19 15l4 4zM4 8v11v-6v.075V6z");
}
</style><path class="yisenpehl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:forward-to-inbox-outline-sharp"} {...others} />);
}

export default Component;
