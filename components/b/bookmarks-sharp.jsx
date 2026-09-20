import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sdavhzbyv {
  fill: currentColor;
  d: path("M4 22V6h12v16l-6-3zm14-4V4H7V2h13v16z");
}
</style><path class="sdavhzbyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bookmarks-sharp"} {...others} />);
}

export default Component;
