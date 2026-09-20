import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mp8ze-btv {
  fill: currentColor;
  d: path("M11 5.825L6.4 10.4L5 9l7-7l7 7l-1.4 1.425l-4.6-4.6V13h-2zM11 18v-3h2v3zm0 4v-2h2v2z");
}
</style><path class="mp8ze-btv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:arrow-warm-up-outline-sharp"} {...others} />);
}

export default Component;
