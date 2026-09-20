import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c7oq1c4gn {
  fill: currentColor;
  d: path("M21.707 3.293a1 1 0 0 0-1.414 0L19 4.586l-.293-.293a1 1 0 1 0-1.414 1.414l1 1a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0 0-1.414M14.004 17H3l-.117.007A1 1 0 0 0 3 19h11.004l.117-.007A1 1 0 0 0 14.003 17m0-6H3l-.117.007A1 1 0 0 0 3 13h11.004l.117-.007A1 1 0 0 0 14.003 11m0-6H3l-.117.007A1 1 0 0 0 3 7h11.004l.117-.007A1 1 0 0 0 14.003 5m7.703 11.293a1 1 0 0 0-1.414 0L19 17.586l-.293-.293a1 1 0 0 0-1.414 1.414l1 1a1 1 0 0 0 1.414 0l2-2a1 1 0 0 0 0-1.414m-1.414-6.5a1 1 0 1 1 1.414 1.414l-2 2a1 1 0 0 1-1.414 0l-1-1a1 1 0 0 1 1.414-1.414l.293.293z");
}
</style><path class="c7oq1c4gn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:task-list-rtl-24-filled"} {...others} />);
}

export default Component;
