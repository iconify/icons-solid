import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.e2eqdzbrn {
  fill: currentColor;
  d: path("M4.78 6.28a.75.75 0 0 0 0-1.06L4.56 5h12.69a.75.75 0 0 0 0-1.5H4.56l.22-.22a.75.75 0 0 0-1.06-1.06l-1.5 1.5a.75.75 0 0 0 0 1.06l1.5 1.5a.75.75 0 0 0 1.06 0M18 9.25a.75.75 0 0 1-.75.75H2.75a.75.75 0 0 1 0-1.5h14.5a.75.75 0 0 1 .75.75M2.75 13.5h12.69l-.22-.22a.75.75 0 1 1 1.06-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.22-.22H2.75a.75.75 0 0 1 0-1.5");
}
</style><path class="e2eqdzbrn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-align-distributed-20-filled"} {...others} />);
}

export default Component;
