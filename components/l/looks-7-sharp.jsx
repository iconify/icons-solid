import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yc88e0l9j {
  fill: currentColor;
  d: path("M4 20V4h16v16zm7.462-3.5H12.5l2-7.936V7.5h-5v1h3.962z");
}
</style><path class="yc88e0l9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:looks-7-sharp"} {...others} />);
}

export default Component;
