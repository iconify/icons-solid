import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d2jy7ccqw {
  fill: currentColor;
  d: path("M9 5v5h3a6 6 0 1 1-6 6a1 1 0 0 1 2 0a4 4 0 1 0 4-4H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2Z");
}
</style><path class="d2jy7ccqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:number-5-bulk-round"} {...others} />);
}

export default Component;
