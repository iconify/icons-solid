import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v7is9gtug {
  fill: currentColor;
  d: path("M0 14V5.4L5.4 0l1.225 1.225L5.8 5H12v2.575L9.275 14zm18.6 10l-1.225-1.225L18.2 19H12v-2.575L14.725 10H24v8.6z");
}
</style><path class="v7is9gtug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:thumbs-up-down-sharp"} {...others} />);
}

export default Component;
