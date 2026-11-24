import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cb1x3kwdz {
  fill: currentColor;
  d: path("M4 7a5 5 0 1 1 10.001.001A5 5 0 0 1 4 7m13 6h.01a1 1 0 0 1 0 2H17a1 1 0 0 1 0-2m-7 2v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1c0-1.862.731-3.636 2.05-4.95a6.9 6.9 0 0 1 2.225-1.499A6.9 6.9 0 0 1 9 14a1 1 0 0 1 1 1m8 2v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0");
}
</style><path class="cb1x3kwdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:user-info-corner-fill-sharp"} {...others} />);
}

export default Component;
