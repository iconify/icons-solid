import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.m5dgmi01x {
  fill: currentColor;
  d: path("M8 2.75a.75.75 0 0 0-1.5 0V6.5H2.75a.75.75 0 0 0 0 1.5H6.5v3.75a.75.75 0 0 0 1.5 0V8h3.75a.75.75 0 0 0 0-1.5H8zm8.25 3.75a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5zm0 13a.75.75 0 0 0 0 1.5h9a.75.75 0 0 0 0-1.5zm4.5-1.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m1.5 6a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0M2.22 16.28a.75.75 0 0 1 1.06-1.06l3.97 3.97l3.97-3.97a.75.75 0 1 1 1.06 1.06l-3.97 3.97l3.97 3.97a.75.75 0 0 1-1.06 1.06l-3.97-3.97l-3.97 3.97a.75.75 0 1 1-1.06-1.06l3.97-3.97z");
}
</style><path class="m5dgmi01x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:math-symbols-28-regular"} {...others} />);
}

export default Component;
