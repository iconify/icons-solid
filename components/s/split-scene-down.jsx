import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j392d5-bs {
  fill: currentColor;
  d: path("M4 9V5q0-.825.588-1.412T6 3h12q.825 0 1.413.588T20 5v4zm2 12q-.825 0-1.412-.587T4 19v-6H2v-2h20v2h-2v6q0 .825-.587 1.413T18 21z");
}
</style><path class="j392d5-bs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:split-scene-down"} {...others} />);
}

export default Component;
