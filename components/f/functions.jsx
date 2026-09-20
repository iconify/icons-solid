import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jy5-ernil {
  fill: currentColor;
  d: path("M6 20v-2l6.5-6L6 6V4h12v3h-7.225l5.375 5l-5.375 5H18v3z");
}
</style><path class="jy5-ernil"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:functions"} {...others} />);
}

export default Component;
