import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.ffc-0dbsu {
  fill: currentColor;
  d: path("M2 8.5V11h12V8.5zm12-1V5H2v2.5zM4.5 14a2.5 2.5 0 0 1-2.45-2h11.9a2.5 2.5 0 0 1-2.45 2zm9.45-10a2.5 2.5 0 0 0-2.45-2h-7a2.5 2.5 0 0 0-2.45 2z");
}
</style><path class="ffc-0dbsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:layout-row-four-16-filled"} {...others} />);
}

export default Component;
