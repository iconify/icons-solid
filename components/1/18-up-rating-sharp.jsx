import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h3os2ybrl {
  fill: currentColor;
  d: path("M8.808 14.692h.884V9.308H7.308v.884h1.5zm3 0h3.884V9.308h-3.884zm.884-.769v-1.538h2.116v1.538zm0-2.307v-1.539h2.116v1.539zM4 20V4h16v16z");
}
</style><path class="h3os2ybrl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:18-up-rating-sharp"} {...others} />);
}

export default Component;
