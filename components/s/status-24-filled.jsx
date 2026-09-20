import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rfl5ho5rp {
  fill: currentColor;
  d: path("M16.025 3.025a3.5 3.5 0 0 1 4.95 4.95l-6.06 6.06a2.75 2.75 0 0 1-1.254.717l-4.723 1.224a.75.75 0 0 1-.914-.914l1.224-4.723a2.75 2.75 0 0 1 .718-1.254zm-1.694.28a9 9 0 1 0 6.364 6.364l-1.27 1.27q.075.52.075 1.061a7.5 7.5 0 1 1-6.439-7.425z");
}
</style><path class="rfl5ho5rp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:status-24-filled"} {...others} />);
}

export default Component;
