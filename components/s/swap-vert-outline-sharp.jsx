import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n54-qjb-l {
  fill: currentColor;
  d: path("M8 13V5.825L5.425 8.4L4 7l5-5l5 5l-1.425 1.4L10 5.825V13zm7 9l-5-5l1.425-1.4L14 18.175V11h2v7.175l2.575-2.575L20 17z");
}
</style><path class="n54-qjb-l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:swap-vert-outline-sharp"} {...others} />);
}

export default Component;
