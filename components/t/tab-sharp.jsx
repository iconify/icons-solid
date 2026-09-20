import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y4ggz9b8w {
  fill: currentColor;
  d: path("M2 20V4h20v16zm11-10h7V6h-7z");
}
</style><path class="y4ggz9b8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:tab-sharp"} {...others} />);
}

export default Component;
