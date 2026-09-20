import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.ezpkcccrx {
  fill: currentColor;
  d: path("M24.5 3A4.5 4.5 0 0 1 29 7.5v17a4.5 4.5 0 0 1-4.5 4.5h-17A4.5 4.5 0 0 1 3 24.5v-17A4.5 4.5 0 0 1 7.5 3zM10 9a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0V10a1 1 0 0 0-1-1m6 0a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0V10a1 1 0 0 0-1-1m6 0a1 1 0 0 0-1 1v12a1 1 0 1 0 2 0V10a1 1 0 0 0-1-1");
}
</style><path class="ezpkcccrx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:calendar-3-day-32-filled"} {...others} />);
}

export default Component;
