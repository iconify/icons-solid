import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gs4f0fnek {
  fill: currentColor;
  d: path("M7 17v-2h2v2zm3 0v-2h4v-2h-4V7h6v2h-4v2h2q.825 0 1.413.588T16 13v2q0 .825-.587 1.413T14 17z");
}
</style><path class="gs4f0fnek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:speed-0-5-outline"} {...others} />);
}

export default Component;
