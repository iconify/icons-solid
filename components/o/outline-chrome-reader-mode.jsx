import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kxw_2qbqw {
  fill: currentColor;
  d: path("M21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M3 19V6h8v13zm18 0h-8V6h8zm-7-9.5h6V11h-6zm0 2.5h6v1.5h-6zm0 2.5h6V16h-6z");
}
</style><path class="kxw_2qbqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-chrome-reader-mode"} {...others} />);
}

export default Component;
