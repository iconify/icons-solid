import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nk6l0uy1j {
  fill: currentColor;
  d: path("M3 9V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v5Zm18 0h-8V6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1ZM3 11h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m0 4h8v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm18 0v3a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-3Z");
}
</style><path class="nk6l0uy1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:align-center-vertical-fill-sharp"} {...others} />);
}

export default Component;
