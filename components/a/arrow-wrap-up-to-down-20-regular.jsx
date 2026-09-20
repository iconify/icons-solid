import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.m__q-tb-t {
  fill: currentColor;
  d: path("M4 14a3 3 0 1 0 6 0V6a2 2 0 1 1 4 0v10.293l-.646-.647a.5.5 0 0 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V6a3 3 0 1 0-6 0v8a2 2 0 1 1-4 0V3.5a.5.5 0 0 0-1 0z");
}
</style><path class="m__q-tb-t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-wrap-up-to-down-20-regular"} {...others} />);
}

export default Component;
