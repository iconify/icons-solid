import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d-5-g3u-q {
  fill: currentColor;
  d: path("M7.713 13.713Q8 13.425 8 13t-.288-.712T7 12t-.712.288T6 13t.288.713T7 14t.713-.288m0-4Q8 9.426 8 9t-.288-.712T7 8t-.712.288T6 9t.288.713T7 10t.713-.288M9 14h9v-2H9zm0-4h9V8H9zM8 21v-2H2V3h20v16h-6v2z");
}
</style><path class="d-5-g3u-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:dvr-sharp"} {...others} />);
}

export default Component;
