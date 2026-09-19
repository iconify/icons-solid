import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mvbuy1-8c {
  fill: currentColor;
  d: path("M21 3H3v18h18zm-6 10h-4v2h4v2H9v-6h4V9H9V7h6z");
}
</style><path class="mvbuy1-8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-looks-two"} {...others} />);
}

export default Component;
