import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cov94mruv {
  fill: currentColor;
  d: path("M18.925 16.075L17.5 14.65l2-2.65L15 6H8.85l-2-2H16l6 8zM4 18h11.2L4 6.8zm16.5 5.3L17.2 20H2V4.8L.7 3.5l1.4-1.4l19.8 19.8zM9.6 12.4");
}
</style><path class="cov94mruv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:label-off-outline-sharp"} {...others} />);
}

export default Component;
