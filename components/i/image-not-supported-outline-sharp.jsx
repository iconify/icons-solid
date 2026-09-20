import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yfhx0dbem {
  fill: currentColor;
  d: path("m20.475 23.3l-2.3-2.3H3V5.825L.7 3.5l1.4-1.4l19.8 19.8l-1.425 1.4ZM5 19h11.175l-2-2H6l3-4l2 2.725l.85-1.05L5 7.825V19Zm16-.825l-2-2V5H7.825l-2-2H21v15.175Zm-7.525-7.525ZM10.6 13.425Z");
}
</style><path class="yfhx0dbem"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:image-not-supported-outline-sharp"} {...others} />);
}

export default Component;
