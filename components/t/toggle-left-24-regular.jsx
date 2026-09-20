import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qs0afp-li {
  fill: currentColor;
  d: path("M7.25 14.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5M22 12a5 5 0 0 0-5-5H7a5 5 0 0 0 0 10h10a5 5 0 0 0 5-5m-5-3.5a3.5 3.5 0 1 1 0 7H7a3.5 3.5 0 1 1 0-7z");
}
</style><path class="qs0afp-li"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:toggle-left-24-regular"} {...others} />);
}

export default Component;
