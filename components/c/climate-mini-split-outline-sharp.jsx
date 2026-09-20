import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g82sbnbey {
  fill: currentColor;
  d: path("M21 12H3V4h18zM4.5 18.077v-1.02q1.23 0 2.096-.857q.865-.859.865-2.084h1.02q0 1.651-1.165 2.806q-1.164 1.155-2.816 1.155m15 0q-1.652 0-2.807-1.159t-1.155-2.802h1.02q0 1.23.858 2.086t2.084.856zm-8 1.039v-5h1v5zM20 11H4zM6.692 11V7.5h10.635V11h-1V8.5H7.692V11zM4 11h16V5H4z");
}
</style><path class="g82sbnbey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:climate-mini-split-outline-sharp"} {...others} />);
}

export default Component;
