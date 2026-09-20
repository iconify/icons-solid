import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eql14yo-u {
  fill: currentColor;
  d: path("M7 19q-.825 0-1.412-.587T5 17q0-.375.15-.737t.45-.663l10-10q.3-.3.663-.45T17 5q.825 0 1.413.587T19 7q0 .375-.137.75t-.438.675l-10 10q-.3.3-.663.438T7 19");
}
</style><path class="eql14yo-u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:eraser-size-1-sharp"} {...others} />);
}

export default Component;
