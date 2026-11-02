import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aka_9kb8w {
  fill: currentColor;
  d: path("M9 2h6a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3m1.158 4.221a2 2 0 1 0 3.684 1.558a2 2 0 0 0-3.684-1.558m0 5a2 2 0 1 0 3.684 1.558a2 2 0 0 0-3.684-1.558M10 17a2 2 0 1 0 3.999.001A2 2 0 0 0 10 17");
}
</style><path class="aka_9kb8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:traffic-light-fill"} {...others} />);
}

export default Component;
