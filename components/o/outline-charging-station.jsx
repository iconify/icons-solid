import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lo-7uxb5a {
  fill: currentColor;
  d: path("m14.5 11l-3 6v-4h-2l3-6v4zM17 3H7v1h10zm0 17H7v1h10zm0-19c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2zM7 18h10V6H7z");
}
</style><path class="lo-7uxb5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-charging-station"} {...others} />);
}

export default Component;
