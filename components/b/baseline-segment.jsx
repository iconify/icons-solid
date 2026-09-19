import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gngncypfs {
  fill: currentColor;
  d: path("M9 18h12v-2H9zM3 6v2h18V6zm6 7h12v-2H9z");
}
</style><path class="gngncypfs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-segment"} {...others} />);
}

export default Component;
