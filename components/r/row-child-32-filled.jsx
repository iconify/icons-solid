import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.di6tccc9c {
  fill: currentColor;
  d: path("M3 6.25A3.25 3.25 0 0 1 6.25 3h19.5A3.25 3.25 0 0 1 29 6.25v4.5A3.25 3.25 0 0 1 25.75 14H9v6.5a2.5 2.5 0 0 0 2.5 2.5H16v-1.75A3.25 3.25 0 0 1 19.25 18h6.5A3.25 3.25 0 0 1 29 21.25v4.5A3.25 3.25 0 0 1 25.75 29h-6.5A3.25 3.25 0 0 1 16 25.75V25h-4.5A4.5 4.5 0 0 1 7 20.5V14h-.75A3.25 3.25 0 0 1 3 10.75z");
}
</style><path class="di6tccc9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:row-child-32-filled"} {...others} />);
}

export default Component;
