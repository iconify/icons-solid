import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.t3gfpplgd {
  fill: currentColor;
  d: path("M14 2c6.627 0 12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14S7.373 2 14 2M8.75 13.25a.75.75 0 0 0-.102 1.493l.102.007h10.5a.75.75 0 0 0 .102-1.493l-.102-.007z");
}
</style><path class="t3gfpplgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:subtract-circle-28-filled"} {...others} />);
}

export default Component;
