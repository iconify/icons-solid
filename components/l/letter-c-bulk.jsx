import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.th64kwpje {
  fill: currentColor;
  d: path("M7 9v6a5 5 0 1 0 10 0a1 1 0 0 1 2 0a7 7 0 1 1-14 0V9a7 7 0 1 1 14 0a1 1 0 0 1-2 0A5 5 0 1 0 7 9");
}
</style><path class="th64kwpje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:letter-c-bulk"} {...others} />);
}

export default Component;
