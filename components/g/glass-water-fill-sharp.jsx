import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cy45kfbra {
  fill: currentColor;
  d: path("M19 2a1 1 0 0 1 .994 1.11l-2 18A1 1 0 0 1 17 22H7a1 1 0 0 1-.994-.89l-2-18A1 1 0 0 1 5 2ZM6.895 11h10.21l.778-7H6.117Z");
}
</style><path class="cy45kfbra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:glass-water-fill-sharp"} {...others} />);
}

export default Component;
