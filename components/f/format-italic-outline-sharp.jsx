import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ho4oa_b5z {
  fill: currentColor;
  d: path("M5 19v-2.5h4l3-9H8V5h10v2.5h-3.5l-3 9H15V19z");
}
</style><path class="ho4oa_b5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:format-italic-outline-sharp"} {...others} />);
}

export default Component;
