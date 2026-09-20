import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.jnmkr2bnk {
  fill: currentColor;
  d: path("M3 5.5A2.5 2.5 0 0 1 5.5 3h9A2.5 2.5 0 0 1 17 5.5v9a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 3 14.5zm1 5v4A1.5 1.5 0 0 0 5.5 16h4v-5.5zm5.5-1V4h-4A1.5 1.5 0 0 0 4 5.5v4zm1 1V16h4a1.5 1.5 0 0 0 1.5-1.5v-4zm5.5-1v-4A1.5 1.5 0 0 0 14.5 4h-4v5.5z");
}
</style><path class="jnmkr2bnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:table-simple-20-regular"} {...others} />);
}

export default Component;
