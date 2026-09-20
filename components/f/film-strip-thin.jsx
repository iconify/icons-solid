import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.zh240-big {
  fill: currentColor;
  d: path("M216 44H40a12 12 0 0 0-12 12v144a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12M36 84h88v88H36Zm96-8V52h40v24Zm-8 0H84V52h40Zm0 104v24H84v-24Zm8 0h40v24h-40Zm0-8V84h88v88Zm88-116v20h-40V52h36a4 4 0 0 1 4 4M40 52h36v24H36V56a4 4 0 0 1 4-4m-4 148v-20h40v24H40a4 4 0 0 1-4-4m180 4h-36v-24h40v20a4 4 0 0 1-4 4");
}
</style><path class="zh240-big"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:film-strip-thin"} {...others} />);
}

export default Component;
