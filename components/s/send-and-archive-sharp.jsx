import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.octa1qeuk {
  fill: currentColor;
  d: path("M3 20v-6l8-2l-8-2V4l14.3 6H17q-2.925 0-4.962 2.063T10 17.05zm10.463.538Q12 19.075 12 17t1.463-3.537T17 12t3.538 1.463T22 17t-1.463 3.538T17 22t-3.537-1.463M17 20l3-3l-.7-.7l-1.8 1.8V14h-1v4.1l-1.8-1.8l-.7.7z");
}
</style><path class="octa1qeuk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:send-and-archive-sharp"} {...others} />);
}

export default Component;
