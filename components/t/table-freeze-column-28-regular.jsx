import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.nzf61wbht {
  fill: currentColor;
  d: path("M6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3zM11 23.5v-5h6v5zM17 11v6h-6v-6zm1.5 12.5v-5h5v2.75a2.25 2.25 0 0 1-2.25 2.25zm5-12.5v6h-5v-6zm-2.25-6.5a2.25 2.25 0 0 1 2.25 2.25V9.5h-5v-5zM11 4.5h6v5h-6zm-4.25 19a2.25 2.25 0 0 1-2.25-2.25V6.75A2.25 2.25 0 0 1 6.75 4.5H9.5v19z");
}
</style><path class="nzf61wbht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:table-freeze-column-28-regular"} {...others} />);
}

export default Component;
