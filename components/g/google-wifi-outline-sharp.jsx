import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rv7mdm0jh {
  fill: currentColor;
  d: path("M4.6 10h14.8l-.275-4H4.875zm-.125 2l-.325 5h15.7l-.325-5zM5 20l-.325-1H2L3 4h18l1 15h-2.675L19 20z");
}
</style><path class="rv7mdm0jh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:google-wifi-outline-sharp"} {...others} />);
}

export default Component;
