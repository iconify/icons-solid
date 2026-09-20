import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.l5lrelrdx {
  fill: currentColor;
  d: path("M21.75 3A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3zM8.5 15.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m5.5 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-5.5-6a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m5.5 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m5.5 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3");
}
</style><path class="l5lrelrdx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:calendar-month-28-filled"} {...others} />);
}

export default Component;
