import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i1ibl_m3k {
  fill: currentColor;
  d: path("M18 4v16H6V4zm0-2H6c-1.1 0-2 .9-2 2v18h16V4c0-1.1-.9-2-2-2m-2.5 8.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5S17 12.83 17 12s-.67-1.5-1.5-1.5");
}
</style><path class="i1ibl_m3k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-sensor-door"} {...others} />);
}

export default Component;
