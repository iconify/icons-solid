import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tfo2jdbyw {
  fill: currentColor;
  d: path("M8 22V9H7V6h1V2h8v4h1v3h-1v13z");
}
</style><path class="tfo2jdbyw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:device-band-sharp"} {...others} />);
}

export default Component;
