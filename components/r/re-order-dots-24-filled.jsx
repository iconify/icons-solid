import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fe-6x4qdh {
  fill: currentColor;
  d: path("M16 17a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-8 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4m8-7a2 2 0 1 1 0 4a2 2 0 0 1 0-4m-8 0a2 2 0 1 1 0 4a2 2 0 0 1 0-4m8-7a2 2 0 1 1 0 4a2 2 0 0 1 0-4M8 3a2 2 0 1 1 0 4a2 2 0 0 1 0-4");
}
</style><path class="fe-6x4qdh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:re-order-dots-24-filled"} {...others} />);
}

export default Component;
