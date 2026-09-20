import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nxhi3xbvw {
  fill: currentColor;
  d: path("M8 14h6q.425 0 .713-.288T15 13v-2l2 2V7l-2 2V7q0-.425-.288-.712T14 6H8q-.425 0-.712.288T7 7v6q0 .425.288.713T8 14m-6 8V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18H6z");
}
</style><path class="nxhi3xbvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:video-chat"} {...others} />);
}

export default Component;
