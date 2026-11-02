import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j0ds38bra {
  fill: currentColor;
  d: path("M4 4v12a3 3 0 0 0 3 3h14a1 1 0 0 1 0 2H7a5 5 0 0 1-5-5V4a1 1 0 0 1 2 0m3 3h6a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2m3 4h7a1 1 0 0 1 0 2h-7a1 1 0 0 1 0-2m10 4a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2Z");
}
</style><path class="j0ds38bra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:chart-gantt-fill-round"} {...others} />);
}

export default Component;
