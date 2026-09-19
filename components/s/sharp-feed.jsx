import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ffj0imlgj {
  fill: currentColor;
  d: path("M16 3H3v18h18V8zM7 7h5v2H7zm10 10H7v-2h10zm0-4H7v-2h10zm-2-4V5l4 4z");
}
</style><path class="ffj0imlgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-feed"} {...others} />);
}

export default Component;
