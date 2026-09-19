import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.afos8yb_y {
  fill: currentColor;
  d: path("M4 9h4v11H4zm12 4h4v7h-4zm-6-9h4v16h-4z");
}
</style><path class="afos8yb_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-bar-chart"} {...others} />);
}

export default Component;
