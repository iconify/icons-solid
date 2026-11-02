import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m8e21kbff {
  fill: currentColor;
  d: path("M21 22H3a1 1 0 0 1 0-2h2V7a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v13h2a1 1 0 0 1 0 2m-6.99-11H14a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="m8e21kbff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:door-fill-round"} {...others} />);
}

export default Component;
