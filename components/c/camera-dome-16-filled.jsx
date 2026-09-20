import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.svyavvafw {
  fill: currentColor;
  d: path("M1 3.5A1.5 1.5 0 0 1 2.5 2h11a1.5 1.5 0 0 1 0 3h-11A1.5 1.5 0 0 1 1 3.5M8 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-1 2a1 1 0 1 1 2 0a1 1 0 0 1-2 0m7-4H2v3a6 6 0 0 0 12 0zm-9 4a3 3 0 1 1 6 0a3 3 0 0 1-6 0");
}
</style><path class="svyavvafw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:camera-dome-16-filled"} {...others} />);
}

export default Component;
