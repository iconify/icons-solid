import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nimow2b_z {
  fill: currentColor;
  d: path("M3 20V8h18v12zM3 7V5h6V3h6v2h6v2z");
}
</style><path class="nimow2b_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:stockpot-sharp"} {...others} />);
}

export default Component;
