import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z1t5seblo {
  fill: currentColor;
  d: path("M3 3h2a1 1 0 0 1 .97.757L6.781 7H21a.998.998 0 0 1 .97 1.243l-2 8A1 1 0 0 1 19 17H8a1 1 0 0 1-.97-.757L4.219 5H3a1 1 0 0 1 0-2m4 17a2 2 0 1 1 3.999-.001A2 2 0 0 1 7 20m9 0a2 2 0 1 1 3.999-.001A2 2 0 0 1 16 20");
}
</style><path class="z1t5seblo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:shopping-cart-fill-sharp"} {...others} />);
}

export default Component;
