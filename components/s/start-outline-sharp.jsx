import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e1edl9bpw {
  fill: currentColor;
  d: path("M2 18V6h2v12zm14 0l-1.425-1.4l3.6-3.6H6v-2h12.175L14.6 7.4L16 6l6 6z");
}
</style><path class="e1edl9bpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:start-outline-sharp"} {...others} />);
}

export default Component;
