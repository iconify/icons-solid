import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fxsnc_twd {
  fill: currentColor;
  d: path("M11.5 17v-4h-2l3-6v4h2zM5 23V1h14v22zm2-5h10V6H7z");
}
</style><path class="fxsnc_twd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:charging-station-sharp"} {...others} />);
}

export default Component;
