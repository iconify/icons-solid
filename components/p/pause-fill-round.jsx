import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d-zd_5xuy {
  fill: currentColor;
  d: path("M6 2h1a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m11 0h1a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3h-1a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3");
}
</style><path class="d-zd_5xuy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:pause-fill-round"} {...others} />);
}

export default Component;
