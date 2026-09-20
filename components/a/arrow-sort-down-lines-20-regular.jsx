import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.z89no7bua {
  fill: currentColor;
  d: path("M15 2.5a.5.5 0 0 0-1 0v13.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L15 16.293zM2.5 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zM5 7.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5M8.5 10a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1z");
}
</style><path class="z89no7bua"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-sort-down-lines-20-regular"} {...others} />);
}

export default Component;
