import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.mn8szxkdo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m27.011 27.73l-3.76-7.121l-3.127 5.423l-3.128-5.423l-3.76 7.12c-6.788-2.961-5.157-16.936 8.086-16.936c9.682 0 12.91 7.986 12.91 7.986s8.118-.333 8.118 8.617c0 7.287-9.15 9.284-12.344 5.557c-3.86 3.327-7.02 4.226-11.28 4.226s-8.65-.998-13.376-6.256");
}
</style><path class="mn8szxkdo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:my-nintendo"} {...others} />);
}

export default Component;
