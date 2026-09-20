import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b05-znbow {
  fill: currentColor;
  d: path("M4 20V6.627L5.78 4.5h12.44L20 6.627V20zM5.4 6.5h13.2l-.85-1H6.25zM5 19h14V7.5H5zm10.93-5.5l-2.1 2.1l.72.72l2.82-2.82l-2.82-2.82l-.72.72zm-7.81 0l2.1-2.1l-.72-.72l-2.82 2.82l2.82 2.82l.72-.72zM5 19V7.5z");
}
</style><path class="b05-znbow"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:sdk-outline-sharp"} {...others} />);
}

export default Component;
