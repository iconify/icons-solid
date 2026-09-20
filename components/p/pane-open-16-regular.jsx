import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.b21vvmbyr {
  d: path("M4 2.999a2 2 0 0 0-2 2V11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.999a2 2 0 0 0-2-2H4zm-1 2a1 1 0 0 1 1-1h2.002V12H4a1 1 0 0 1-1-1V4.999zM7.002 12V3.999H12a1 1 0 0 1 1 1V11a1 1 0 0 1-1 1H7.002z");
  fill: currentColor;
}

.dewl0r6id {
  d: path("M9.707 8.5l.647.646a.5.5 0 0 1-.708.707l-1.5-1.5a.5.5 0 0 1 0-.707l1.5-1.5a.5.5 0 0 1 .708.707l-.647.647h1.791a.5.5 0 0 1 0 1h-1.79z");
  fill: currentColor;
}

.ft5dv1b6b {
  fill: none;
}
</style><g class="ft5dv1b6b"><path class="dewl0r6id"/><path class="b21vvmbyr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:pane-open-16-regular"} {...others} />);
}

export default Component;
