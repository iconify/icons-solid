import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rcq66ibnx {
  fill: currentColor;
  d: path("M3 20V8h18v12zm2-2h14v-8H5zM3 7V5h6V3h6v2h6v2zm9 7");
}
</style><path class="rcq66ibnx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:stockpot-outline-sharp"} {...others} />);
}

export default Component;
