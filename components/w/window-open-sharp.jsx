import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yo9pnmbhf {
  fill: currentColor;
  d: path("M4 21V3h16v18zm3-10h4v-1h2v1h4V6H7zm-1 8h12V5H6z");
}
</style><path class="yo9pnmbhf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:window-open-sharp"} {...others} />);
}

export default Component;
