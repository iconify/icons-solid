import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.qq07umbeo {
  fill: currentColor;
  d: path("M3 6.75c0-.69.56-1.25 1.25-1.25h19a5.75 5.75 0 0 1 0 11.5H8.75a3.25 3.25 0 0 0 0 6.5h16.982l-.866-.866a1.25 1.25 0 0 1 1.768-1.768l3 3a1.25 1.25 0 0 1 0 1.768l-3 3a1.25 1.25 0 0 1-1.768-1.768l.866-.866H8.75a5.75 5.75 0 0 1 0-11.5h14.5a3.25 3.25 0 0 0 0-6.5h-19C3.56 8 3 7.44 3 6.75");
}
</style><path class="qq07umbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-wrap-32-filled"} {...others} />);
}

export default Component;
