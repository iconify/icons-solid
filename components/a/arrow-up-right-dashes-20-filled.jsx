import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.hm-1wubfc {
  fill: currentColor;
  d: path("M8.75 3a.75.75 0 0 0 0 1.5h5.69l-1.47 1.47a.75.75 0 0 0 1.06 1.06l1.47-1.47v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75zm3.03 6.28a.75.75 0 0 0-1.06-1.06l-2.5 2.5a.75.75 0 1 0 1.06 1.06zm-5 5a.75.75 0 1 0-1.06-1.06l-2.75 2.75a.75.75 0 1 0 1.06 1.06z");
}
</style><path class="hm-1wubfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-up-right-dashes-20-filled"} {...others} />);
}

export default Component;
