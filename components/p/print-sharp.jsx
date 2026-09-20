import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a1ctqd8ji {
  fill: currentColor;
  d: path("M7 7.846v-3.23h10v3.23zm10.616 4.27q.425 0 .712-.288t.288-.712t-.288-.713t-.712-.288t-.713.288t-.287.713t.287.712t.713.288M8 19h8v-4.538H8zm-1 1v-4H3.577V8.616h16.846V16H17v4z");
}
</style><path class="a1ctqd8ji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:print-sharp"} {...others} />);
}

export default Component;
