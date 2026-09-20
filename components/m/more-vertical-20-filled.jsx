import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.wxg0ulboe {
  fill: currentColor;
  d: path("M10 6.5A1.75 1.75 0 1 1 10 3a1.75 1.75 0 0 1 0 3.5M10 17a1.75 1.75 0 1 1 0-3.5a1.75 1.75 0 0 1 0 3.5m-1.75-7a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 0 0-3.5 0");
}
</style><path class="wxg0ulboe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:more-vertical-20-filled"} {...others} />);
}

export default Component;
