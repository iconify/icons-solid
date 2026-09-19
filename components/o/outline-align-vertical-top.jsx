import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vi47-hbwa {
  fill: currentColor;
  d: path("M22 2v2H2V2zM7 22h3V6H7zm7-6h3V6h-3z");
}
</style><path class="vi47-hbwa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-align-vertical-top"} {...others} />);
}

export default Component;
