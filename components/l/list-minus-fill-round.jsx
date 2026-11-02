import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y7wu9kboj {
  fill: currentColor;
  d: path("M3 5h11a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m0 5h11a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2m12 4h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2M3 15h7a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2");
}
</style><path class="y7wu9kboj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:list-minus-fill-round"} {...others} />);
}

export default Component;
