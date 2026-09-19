import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.azgyuxb4v {
  fill: currentColor;
  d: path("M6.5 10h-2v7h2zm6 0h-2v7h2zm8.5 9H2v2h19zm-2.5-9h-2v7h2zm-7-6.74L16.71 6H6.29zm0-2.26L2 6v2h19V6z");
}
</style><path class="azgyuxb4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-account-balance"} {...others} />);
}

export default Component;
