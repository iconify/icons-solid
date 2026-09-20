import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bvzoi796h {
  fill: currentColor;
  d: path("M14 17.308L8.692 12L14 6.692l.708.708l-4.6 4.6l4.6 4.6z");
}
</style><path class="bvzoi796h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:chevron-backward-outline-sharp"} {...others} />);
}

export default Component;
