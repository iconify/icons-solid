import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lgx-x_b_a {
  fill: currentColor;
  d: path("M23 3H1v16h7v2h8v-2h7zm-2 14H3V5h18zm-5-7v2h-3v3h-2v-3H8v-2h3V7h2v3z");
}
</style><path class="lgx-x_b_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-add-to-queue"} {...others} />);
}

export default Component;
