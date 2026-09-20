import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wypf8u_4d {
  fill: currentColor;
  d: path("M7 2h10v9.05l-4.5 2.65l.7 2.3H17l-3.1 2.2l1.2 3.8l-3.1-2.35L8.9 22l1.2-3.8L7 16h3.8l.7-2.3L7 11.05zm2 2v5.85l2 1.2V4zm6 0h-2v7.05l2-1.2zm-2 3.525");
}
</style><path class="wypf8u_4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:military-tech-outline-sharp"} {...others} />);
}

export default Component;
