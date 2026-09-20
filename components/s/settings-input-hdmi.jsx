import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n-0xa9s9b {
  fill: currentColor;
  d: path("M8 22v-3l-3-6V7h1V4q0-.825.588-1.412T8 2h8q.825 0 1.413.588T18 4v3h1v6l-3 6v3zM8 7h2V5h1v2h2V5h1v2h2V4H8z");
}
</style><path class="n-0xa9s9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:settings-input-hdmi"} {...others} />);
}

export default Component;
