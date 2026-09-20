import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fzf58kbwi {
  fill: currentColor;
  d: path("M8 16V8h10v8zm-6 4v-2h18V4h2v16z");
}
</style><path class="fzf58kbwi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:picture-in-picture-medium-sharp"} {...others} />);
}

export default Component;
