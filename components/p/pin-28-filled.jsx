import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.loql9qneq {
  fill: currentColor;
  d: path("M19.039 3.478c-1.59-1.59-4.274-1.124-5.236.907l-2.553 5.39a1.75 1.75 0 0 1-.953.884l-4.13 1.588a1.75 1.75 0 0 0-.61 2.871L8.69 18.25L3 23.94V25h1.06l5.69-5.69l3.132 3.132a1.75 1.75 0 0 0 2.87-.61l1.589-4.13c.161-.419.478-.76.884-.953l5.39-2.553c2.031-.962 2.496-3.646.907-5.235z");
}
</style><path class="loql9qneq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:pin-28-filled"} {...others} />);
}

export default Component;
