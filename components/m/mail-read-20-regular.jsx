import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.w3nfu15zi {
  fill: currentColor;
  d: path("M9.743 2.071a.5.5 0 0 1 .514 0l6.772 4.063A2 2 0 0 1 18 7.85v6.65a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5V7.85a2 2 0 0 1 .971-1.716zM10 3.083L3.486 6.992L3.472 7L10 10.917L16.528 7l-.013-.008zm7 4.8l-6.743 4.046a.5.5 0 0 1-.514 0L3 7.883V14.5A1.5 1.5 0 0 0 4.5 16h11a1.5 1.5 0 0 0 1.5-1.5z");
}
</style><path class="w3nfu15zi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:mail-read-20-regular"} {...others} />);
}

export default Component;
