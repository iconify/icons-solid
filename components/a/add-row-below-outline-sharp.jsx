import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sylkw0bey {
  fill: currentColor;
  d: path("M5 10.558h14V4H5zM4 19V3h16v16h-3.116v-1H19v-6.442H5V18h2.116v1zm8-8.442v1zM11.5 21v-2h-2v-1h2v-2h1v2h2v1h-2v2z");
}
</style><path class="sylkw0bey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:add-row-below-outline-sharp"} {...others} />);
}

export default Component;
