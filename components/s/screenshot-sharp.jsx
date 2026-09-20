import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mbug5nb6s {
  fill: currentColor;
  d: path("M16 15h-2v3h-3v2h5zM8 9h2V6h3V4H8zM5 23V1h14v5.1h1v4.8h-1V23z");
}
</style><path class="mbug5nb6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:screenshot-sharp"} {...others} />);
}

export default Component;
