import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e8_9kccng {
  fill: currentColor;
  d: path("M4 15h16v-2H4zm4 7v-5H2V2h20v15h-6v5l-4-2zM4 10h16V4H4zm0 5V4z");
}
</style><path class="e8_9kccng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:card-membership-outline-sharp"} {...others} />);
}

export default Component;
