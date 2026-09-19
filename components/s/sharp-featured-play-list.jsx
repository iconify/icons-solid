import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ffns4ybyp {
  fill: currentColor;
  d: path("M23 3H1v18h22zm-11 8H3V9h9zm0-4H3V5h9z");
}
</style><path class="ffns4ybyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-featured-play-list"} {...others} />);
}

export default Component;
