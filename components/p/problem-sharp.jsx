import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ylok3ab4h {
  fill: currentColor;
  d: path("M7.713 15.713Q8 15.425 8 15t-.288-.712T7 14t-.712.288T6 15t.288.713T7 16t.713-.288M6 13h2V8H6zm4 2h8v-2h-8zm0-4h8V9h-8zm-8 9V4h20v16z");
}
</style><path class="ylok3ab4h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:problem-sharp"} {...others} />);
}

export default Component;
