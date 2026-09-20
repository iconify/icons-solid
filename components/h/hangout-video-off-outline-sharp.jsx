import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nfjw8t5mi {
  fill: currentColor;
  d: path("M10.9 8.05H14v3.1zm3.1 3.1L18 8v7.15zm6 6l2 2V4H6.85l2 2H20zM4 4l2 2H4v12h11.15l-2-2H6V8.85L.7 3.5l1.4-1.4l19.8 19.8l-1.4 1.4l-3.35-3.3H2V4zm5.6 8.45");
}
</style><path class="nfjw8t5mi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:hangout-video-off-outline-sharp"} {...others} />);
}

export default Component;
