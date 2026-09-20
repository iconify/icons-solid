import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.fooxyzbuo {
  fill: currentColor;
  d: path("M9.5 0A2.5 2.5 0 0 1 12 2.5V3a.5.5 0 0 1-1 0v-.5a1.5 1.5 0 0 0-3 0V4a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h3V2.5A2.5 2.5 0 0 1 9.5 0M6 6.75a.75.75 0 1 0 0 1.5a.75.75 0 0 0 0-1.5");
}
</style><path class="fooxyzbuo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:lock-open-12-filled"} {...others} />);
}

export default Component;
