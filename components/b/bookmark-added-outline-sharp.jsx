import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ele2f0bkk {
  fill: currentColor;
  d: path("M17.114 9L15 6.887l.689-.714l1.424 1.425l3.525-3.55l.714.714zM12 16.917L6 19.5V4h7v1H7v12.95l5-2.15l5 2.15V11h1v8.5zM7 5h6z");
}
</style><path class="ele2f0bkk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:bookmark-added-outline-sharp"} {...others} />);
}

export default Component;
