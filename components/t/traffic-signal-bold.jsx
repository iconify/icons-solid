import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.vu705qbjg {
  fill: currentColor;
  d: path("M216 140h-12V84h12a12 12 0 0 0 0-24h-12V40a20 20 0 0 0-20-20H72a20 20 0 0 0-20 20v20H40a12 12 0 0 0 0 24h12v56H40a12 12 0 0 0 0 24h12v52a20 20 0 0 0 20 20h112a20 20 0 0 0 20-20v-52h12a12 12 0 0 0 0-24m-36 72H76V44h104Zm-52-92a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0-40a8 8 0 1 1-8 8a8 8 0 0 1 8-8m0 120a32 32 0 1 0-32-32a32 32 0 0 0 32 32m0-40a8 8 0 1 1-8 8a8 8 0 0 1 8-8");
}
</style><path class="vu705qbjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:traffic-signal-bold"} {...others} />);
}

export default Component;
