import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zu62vsfal {
  fill: currentColor;
  d: path("M3 18V6h18v12zm2-2h14V8H5zm0 0V8z");
}
</style><path class="zu62vsfal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:crop-3-2-outline-sharp"} {...others} />);
}

export default Component;
