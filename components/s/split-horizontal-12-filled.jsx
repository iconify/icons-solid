import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.yk2b9g0iz {
  fill: currentColor;
  d: path("M8.5 1A1.5 1.5 0 0 1 10 2.5V4H2V2.5A1.5 1.5 0 0 1 3.5 1zm2 4a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1zM2 7v1.5A1.5 1.5 0 0 0 3.5 10h5A1.5 1.5 0 0 0 10 8.5V7z");
}
</style><path class="yk2b9g0iz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:split-horizontal-12-filled"} {...others} />);
}

export default Component;
