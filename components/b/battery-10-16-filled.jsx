import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.hmat00bwy {
  fill: currentColor;
  d: path("M14 6.5h-.5V6c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h7.5c1.103 0 2-.897 2-2v-.5h.5a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5M12 10a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h7.5a.5.5 0 0 1 .5.5z");
}
</style><path class="hmat00bwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:battery-10-16-filled"} {...others} />);
}

export default Component;
