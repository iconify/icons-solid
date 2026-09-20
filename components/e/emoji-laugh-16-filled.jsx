import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.fmy_4m5xc {
  fill: currentColor;
  d: path("M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2M6 6a.5.5 0 0 1 .5.5a.5.5 0 0 0 1 0a1.5 1.5 0 1 0-3 0a.5.5 0 0 0 1 0A.5.5 0 0 1 6 6m4 0a.5.5 0 0 1 .5.5a.5.5 0 0 0 1 0a1.5 1.5 0 0 0-3 0a.5.5 0 0 0 1 0A.5.5 0 0 1 10 6M4.535 8.5a3.5 3.5 0 0 0 6.93 0z");
}
</style><path class="fmy_4m5xc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:emoji-laugh-16-filled"} {...others} />);
}

export default Component;
