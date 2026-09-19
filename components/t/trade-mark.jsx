import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":64,"height":64};
const content = `<style>.kbeabbcax {
  fill: currentColor;
  d: path("M2 2v7.529h10.313V34h7.5V9.529h10.312V2zm52.5 0l-6.562 13.177L41.375 2h-7.5v32h7.5V20.823L47.938 34L54.5 20.823V34H62V2z");
}
</style><path class="kbeabbcax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"emojione-monotone:trade-mark"} {...others} />);
}

export default Component;
