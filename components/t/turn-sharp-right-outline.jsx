import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c4awcy7bh {
  fill: currentColor;
  d: path("M6 21v-6q0-.825.588-1.412T8 13h8V6.8l-1.6 1.6L13 7l4-4l4 4l-1.4 1.4L18 6.8V13q0 .825-.587 1.413T16 15H8v6z");
}
</style><path class="c4awcy7bh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:turn-sharp-right-outline"} {...others} />);
}

export default Component;
