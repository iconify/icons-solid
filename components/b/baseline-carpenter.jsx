import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zkbwkrbxo {
  fill: currentColor;
  d: path("M19.73 14.23L7 1.5L3.11 5.39l8.13 11.67c-.78.78-.78 2.05 0 2.83l1.41 1.41c.78.78 2.05.78 2.83 0l4.24-4.24c.79-.78.79-2.05.01-2.83m-5.66 5.65l-1.41-1.41l4.24-4.24l1.41 1.41z");
}
</style><path class="zkbwkrbxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-carpenter"} {...others} />);
}

export default Component;
