import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aqn2vnbqm {
  fill: currentColor;
  d: path("M22 4H2.01L2 20h20zm-2 14H4V8l8 5l8-5zm-8-7L4 6h16z");
}
</style><path class="aqn2vnbqm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-mail-outline"} {...others} />);
}

export default Component;
