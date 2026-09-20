import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i3en5pbuw {
  fill: currentColor;
  d: path("M4 13v2h16v-2zM4 2h16q.825 0 1.413.588T22 4v11q0 .825-.587 1.413T20 17h-4v5l-4-2l-4 2v-5H4q-.825 0-1.412-.587T2 15V4q0-.825.588-1.412T4 2m0 8h16V4H4zm0 5V4z");
}
</style><path class="i3en5pbuw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:card-membership-outline"} {...others} />);
}

export default Component;
