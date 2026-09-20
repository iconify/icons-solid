import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f962htb2z {
  fill: currentColor;
  d: path("m9.7 18.7l-1.4-1.4l2.3-2.3l-2.3-2.3l1.4-1.4l2.3 2.3l2.3-2.3l1.4 1.4l-2.3 2.3l2.3 2.3l-1.4 1.4l-2.3-2.3zM3 22V4h3V2h2v2h8V2h2v2h3v18zm2-2h14V10H5z");
}
</style><path class="f962htb2z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:event-busy-sharp"} {...others} />);
}

export default Component;
