import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iamzgcd7o {
  fill: currentColor;
  d: path("M3 22q-.825 0-1.412-.587T1 20V7h2v13h15v2zm4-4q-.825 0-1.412-.587T5 16V7.5q0-.525.238-1t.712-.75L14 1l2 1.175L7.2 7.35l6.8 4l6.75-4q.375-.225.763-.212t.737.212t.55.538t.2.762V16q0 .825-.587 1.413T21 18zm6.85-8l-2.8-2.8l1.4-1.4l1.4 1.4l3.55-3.55l1.4 1.4z");
}
</style><path class="iamzgcd7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:notification-multiple"} {...others} />);
}

export default Component;
