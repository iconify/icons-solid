import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xiokrfqwu {
  fill: currentColor;
  d: path("M17 4h-3V2h-4v2H7v18h10zm-2 10h-2v2h-2v-2H9v-2h2v-2h2v2h2z");
}
</style><path class="xiokrfqwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-battery-saver"} {...others} />);
}

export default Component;
