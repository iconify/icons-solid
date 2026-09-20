import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.ss7f7x4xq {
  fill: currentColor;
  d: path("M12.854 26.854a.5.5 0 0 0 0-.708L7.707 21H19a7 7 0 1 0 0-14H9.5a.5.5 0 0 0 0 1H19a6 6 0 0 1 0 12H7.707l5.147-5.146a.5.5 0 0 0-.708-.708l-6 6a.5.5 0 0 0 0 .708l6 6a.5.5 0 0 0 .708 0");
}
</style><path class="ss7f7x4xq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-hook-down-left-32-light"} {...others} />);
}

export default Component;
