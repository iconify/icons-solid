import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.tzdca0fvs {
  fill: currentColor;
  d: path("M10.5 4a.5.5 0 0 1 0 1H5.707L15 14.293V9.5a.5.5 0 0 1 1 0v6a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L5 5.707V10.5a.5.5 0 0 1-1 0v-6a.5.5 0 0 1 .5-.5z");
}
</style><path class="tzdca0fvs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-maximize-top-left-bottom-right-20-regular"} {...others} />);
}

export default Component;
