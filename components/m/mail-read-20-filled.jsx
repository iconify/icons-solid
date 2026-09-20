import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.b-k4f7f8a {
  fill: currentColor;
  d: path("M10.257 1.071a.5.5 0 0 0-.514 0L2.97 5.134q-.226.136-.405.32L10 9.918l7.435-4.461a2 2 0 0 0-.406-.322zm7.673 5.254l-7.673 4.604a.5.5 0 0 1-.514 0L2.07 6.323Q2 6.58 2 6.85v6.65A2.5 2.5 0 0 0 4.5 16h11a2.5 2.5 0 0 0 2.5-2.5V6.85q0-.27-.07-.525");
}
</style><path class="b-k4f7f8a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:mail-read-20-filled"} {...others} />);
}

export default Component;
