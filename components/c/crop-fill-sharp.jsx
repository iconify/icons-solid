import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aqyjho4xn {
  fill: currentColor;
  d: path("M7 3v14h14a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2H6a1 1 0 0 1-1-1V7H3a1 1 0 0 1 0-2h2V3a1 1 0 0 1 2 0m3 2h8a1 1 0 0 1 1 1v8a1 1 0 0 1-2 0V7h-7a1 1 0 0 1 0-2");
}
</style><path class="aqyjho4xn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:crop-fill-sharp"} {...others} />);
}

export default Component;
