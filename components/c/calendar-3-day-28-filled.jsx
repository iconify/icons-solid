import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.vlxp4hb1a {
  fill: currentColor;
  d: path("M21.75 3A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3zM14 8.25a.75.75 0 0 0-.743.648L13.25 9v10l.007.102a.75.75 0 0 0 1.486 0L14.75 19V9l-.007-.102A.75.75 0 0 0 14 8.25m5.25 0a.75.75 0 0 0-.743.648L18.5 9v10l.007.102a.75.75 0 0 0 1.486 0L20 19V9l-.007-.102a.75.75 0 0 0-.743-.648m-10.5 0a.75.75 0 0 0-.743.648L8 9v10l.007.102a.75.75 0 0 0 1.486 0L9.5 19V9l-.007-.102a.75.75 0 0 0-.743-.648");
}
</style><path class="vlxp4hb1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:calendar-3-day-28-filled"} {...others} />);
}

export default Component;
