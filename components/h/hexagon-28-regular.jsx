import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.q88zp2ajq {
  fill: currentColor;
  d: path("M9.39 4.5c-.441 0-.85.233-1.075.613l-4.886 8.25a1.25 1.25 0 0 0 0 1.274l4.886 8.25c.225.38.634.613 1.075.613h9.22c.442 0 .85-.233 1.076-.613l4.887-8.25a1.25 1.25 0 0 0 0-1.274l-4.887-8.25A1.25 1.25 0 0 0 18.61 4.5zm-2.366-.151A2.75 2.75 0 0 1 9.39 3h9.22a2.75 2.75 0 0 1 2.366 1.348l4.887 8.25a2.75 2.75 0 0 1 0 2.804l-4.887 8.25A2.75 2.75 0 0 1 18.61 25H9.39a2.75 2.75 0 0 1-2.366-1.349l-4.885-8.25a2.75 2.75 0 0 1 0-2.802z");
}
</style><path class="q88zp2ajq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:hexagon-28-regular"} {...others} />);
}

export default Component;
