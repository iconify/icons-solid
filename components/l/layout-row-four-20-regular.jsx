import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.exo7_tbos {
  fill: currentColor;
  d: path("M17 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3zm-3-2a2 2 0 0 1 2 2H4a2 2 0 0 1 2-2zM4 10.5h12V13H4zm0-1V7h12v2.5zM6 16a2 2 0 0 1-2-2h12a2 2 0 0 1-2 2z");
}
</style><path class="exo7_tbos"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:layout-row-four-20-regular"} {...others} />);
}

export default Component;
