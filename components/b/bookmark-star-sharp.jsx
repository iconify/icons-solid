import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.esfjwpbvc {
  fill: currentColor;
  d: path("M9.725 14L12 12.625L14.275 14l-.6-2.6l2-1.725l-2.625-.225L12 7l-1.05 2.45l-2.625.225l2 1.725zM5 21V3h14v18l-7-3z");
}
</style><path class="esfjwpbvc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bookmark-star-sharp"} {...others} />);
}

export default Component;
