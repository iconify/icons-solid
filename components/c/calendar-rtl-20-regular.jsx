import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.bu4j23fem {
  fill: currentColor;
  d: path("M13 11a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-1 2a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-2-2a1 1 0 1 1 0-2a1 1 0 0 1 0 2m-1 2a1 1 0 1 0 2 0a1 1 0 0 0-2 0m-2-2a1 1 0 1 1 0-2a1 1 0 0 1 0 2M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5zM16 7H4v7.5A1.5 1.5 0 0 0 5.5 16h9a1.5 1.5 0 0 0 1.5-1.5zm-1.5-3h-9A1.5 1.5 0 0 0 4 5.5V6h12v-.5A1.5 1.5 0 0 0 14.5 4");
}
</style><path class="bu4j23fem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:calendar-rtl-20-regular"} {...others} />);
}

export default Component;
