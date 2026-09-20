import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bsqj7w-ln {
  fill: currentColor;
  d: path("M4 22V6h12v16l-6-3zm2-3.025l4-2.15l4 2.15V8H6zM18 18V4H7V2h13v16zM6 8h8z");
}
</style><path class="bsqj7w-ln"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bookmarks-outline-sharp"} {...others} />);
}

export default Component;
