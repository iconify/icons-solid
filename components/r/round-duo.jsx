import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j4nskgbqq {
  fill: currentColor;
  d: path("M20 2h-8C6.38 2 2 6.66 2 12.28C2 17.5 6.49 22 11.72 22C17.39 22 22 17.62 22 12V4c0-1.1-.9-2-2-2m-3 13l-3-2v2H7V9h7v2l3-2z");
}
</style><path class="j4nskgbqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:round-duo"} {...others} />);
}

export default Component;
