import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.dzck2fbik {
  fill: currentColor;
  d: path("M252 128a60.07 60.07 0 0 1-60 60H44a40 40 0 0 1 0-80h140a12 12 0 0 1 0 24H44a16 16 0 0 0 0 32h148a36 36 0 0 0 0-72H80a12 12 0 0 1 0-24h112a60.07 60.07 0 0 1 60 60");
}
</style><path class="dzck2fbik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:paperclip-horizontal-bold"} {...others} />);
}

export default Component;
