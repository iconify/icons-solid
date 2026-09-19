import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vpm90iwms {
  fill: currentColor;
  d: path("M12.01 7L10 9h4zM17 10v4l2-1.99zM7 10l-2 2.01L7 14zm7 5h-4l2.01 2zm6-11H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 14.01H4V5.99h16z");
}
</style><path class="vpm90iwms"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-settings-overscan"} {...others} />);
}

export default Component;
