import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ornf4bc1t {
  fill: currentColor;
  d: path("M21 3H3c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5a2 2 0 0 0-2-2m0 14H3V5h18zm-5-7v2H8v-2z");
}
</style><path class="ornf4bc1t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-remove-from-queue"} {...others} />);
}

export default Component;
