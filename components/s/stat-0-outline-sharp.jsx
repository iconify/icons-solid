import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pnc0zpvjb {
  fill: currentColor;
  d: path("m12 19l-7-7l7-7l7 7zm0-2.85L16.15 12L12 7.85L7.85 12zM12 12");
}
</style><path class="pnc0zpvjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:stat-0-outline-sharp"} {...others} />);
}

export default Component;
