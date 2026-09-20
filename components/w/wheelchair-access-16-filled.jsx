import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.ih6hz7bsl {
  fill: currentColor;
  d: path("M5.75 7q.462.002.893.107A3.754 3.754 0 0 1 9.5 10.75A3.75 3.75 0 1 1 5.75 7m1.246-4.556a1 1 0 0 1 1.01-.01l2.548 1.454l.01.007l.942.553a1 1 0 0 1 .26 1.504L10.055 8H13l.116.007a1 1 0 0 1 .846 1.268l-1.001 3.5a1.001 1.001 0 0 1-1.924-.55L11.674 10H10.44a4.76 4.76 0 0 0-3.034-3.703l1.1-1.275l-.889-.508l-.965.805a1 1 0 0 1-1.28-1.535l1.498-1.25zM12.5 1a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3");
}
</style><path class="ih6hz7bsl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:wheelchair-access-16-filled"} {...others} />);
}

export default Component;
