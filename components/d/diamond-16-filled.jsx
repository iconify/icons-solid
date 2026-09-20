import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.kjlpoacyy {
  fill: currentColor;
  d: path("M6.232 1.233a2.5 2.5 0 0 1 3.535 0l5 4.999a2.5 2.5 0 0 1 0 3.535l-5 5a2.5 2.5 0 0 1-3.535 0l-5-5a2.5 2.5 0 0 1 0-3.535z");
}
</style><path class="kjlpoacyy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:diamond-16-filled"} {...others} />);
}

export default Component;
