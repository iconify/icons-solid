import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.qgqtrnbru {
  fill: currentColor;
  d: path("M8 14a.75.75 0 0 1-.75-.75V4.463L4.309 7.75a.75.75 0 0 1-1.118-1L7.441 2A.75.75 0 0 1 8.56 2l4.25 4.75a.75.75 0 1 1-1.118 1L8.75 4.463v8.787A.75.75 0 0 1 8 14");
}
</style><path class="qgqtrnbru"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-up-16-filled"} {...others} />);
}

export default Component;
