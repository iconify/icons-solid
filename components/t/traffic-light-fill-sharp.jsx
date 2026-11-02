import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f5pov_bdy {
  fill: currentColor;
  d: path("M6 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1Zm4.158 3.221a2 2 0 1 0 3.684 1.558a2 2 0 0 0-3.684-1.558m0 5a2 2 0 1 0 3.684 1.558a2 2 0 0 0-3.684-1.558M10 17a2 2 0 1 0 3.999.001A2 2 0 0 0 10 17");
}
</style><path class="f5pov_bdy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:traffic-light-fill-sharp"} {...others} />);
}

export default Component;
