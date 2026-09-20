import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jwc8sqbzn {
  fill: currentColor;
  d: path("m12 16.5l4-4H8zM5 19h14v-9H5zm-2 2V3h18v18z");
}
</style><path class="jwc8sqbzn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:top-panel-open-sharp"} {...others} />);
}

export default Component;
