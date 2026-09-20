import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n9j63_brm {
  fill: currentColor;
  d: path("M4.004 15.631a2 2 0 0 0 2.571 1.784l4.293-1.288a3.25 3.25 0 0 0 1.159-.627H19.5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-3a1 1 0 0 1 .504-.869");
}
</style><path class="n9j63_brm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:color-line-accent-24-regular"} {...others} />);
}

export default Component;
