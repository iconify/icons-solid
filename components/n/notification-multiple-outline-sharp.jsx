import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vtdza8cfp {
  fill: currentColor;
  d: path("M1 22V7h2v13h15v2zm13-8.35l-7-4.1V16h14V9.55zM5 18V6.3L14 1l2 1.175L7.2 7.35l6.8 4l7.5-4.45l1.5.9V18zm9-8l-2.8-2.8l1.4-1.4L14 7.2l3.55-3.55l1.4 1.4zm0 6h7H7z");
}
</style><path class="vtdza8cfp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:notification-multiple-outline-sharp"} {...others} />);
}

export default Component;
