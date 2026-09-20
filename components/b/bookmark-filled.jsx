import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.k98if7bxz {
  fill: currentColor;
  d: path("m10 13.467l-3.755 4.2C5.634 18.35 4.5 17.918 4.5 17V3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v14c0 .918-1.133 1.35-1.745.666z");
}
</style><path class="k98if7bxz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:bookmark-filled"} {...others} />);
}

export default Component;
