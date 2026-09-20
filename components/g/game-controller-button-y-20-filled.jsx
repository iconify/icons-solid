import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.szxk_4b_m {
  fill: currentColor;
  d: path("M10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16m2.765 4.076a.5.5 0 0 0-.689.16L10 9.555l-2.076-3.32a.5.5 0 1 0-.848.529L9.5 10.643V13.5a.5.5 0 0 0 1 0v-2.857l2.424-3.878a.5.5 0 0 0-.16-.689");
}
</style><path class="szxk_4b_m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:game-controller-button-y-20-filled"} {...others} />);
}

export default Component;
