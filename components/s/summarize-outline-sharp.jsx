import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.up0cnugah {
  fill: currentColor;
  d: path("M7 9h2V7H7zm0 4h2v-2H7zm0 4h2v-2H7zm-4 4V3h13l5 5v13zm2-2h14V9h-4V5H5zM5 5v4zv14z");
}
</style><path class="up0cnugah"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:summarize-outline-sharp"} {...others} />);
}

export default Component;
