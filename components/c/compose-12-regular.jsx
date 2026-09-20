import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.cocuw2sve {
  fill: currentColor;
  d: path("M10.854 1.854a.5.5 0 0 0-.708-.708L5.293 6L5 7l1-.293zM6.5 2a.5.5 0 0 1 0 1H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5.5a.5.5 0 0 1 1 0V8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z");
}
</style><path class="cocuw2sve"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:compose-12-regular"} {...others} />);
}

export default Component;
