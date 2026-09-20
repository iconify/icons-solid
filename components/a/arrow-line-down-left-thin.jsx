import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.kkow9xbvm {
  fill: currentColor;
  d: path("M228 48a4 4 0 0 1-4 4H48a4 4 0 0 1 0-8h176a4 4 0 0 1 4 4m-46.83 45.17L76 198.34V112a4 4 0 0 0-8 0v96a4 4 0 0 0 4 4h96a4 4 0 0 0 0-8H81.66L186.83 98.83a4 4 0 1 0-5.66-5.66");
}
</style><path class="kkow9xbvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-line-down-left-thin"} {...others} />);
}

export default Component;
