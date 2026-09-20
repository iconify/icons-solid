import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gn4f9zb0n {
  fill: currentColor;
  d: path("M12.28 2.22a.75.75 0 0 0-1.06 0l-5 5a.75.75 0 0 0 1.06 1.06L11 4.56v13.69a.75.75 0 0 0 1.5 0V4.56l3.72 3.72a.75.75 0 1 0 1.06-1.06zM5.25 20.5a.75.75 0 0 0 0 1.5h13a.75.75 0 0 0 0-1.5z");
}
</style><path class="gn4f9zb0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-export-up-24-regular"} {...others} />);
}

export default Component;
