import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.llvh9zbpz {
  fill: currentColor;
  d: path("M5.644 7.05L7.05 5.645l2.123 2.122l-1.408 1.407zM11 1h2v6h-2zm5.242 13.834l2.12 2.12l-1.406 1.408l-2.12-2.12zM14.834 7.76l2.12-2.123l1.41 1.407l-2.123 2.122zm-5.668 8.482l-2.122 2.12l-1.407-1.406l2.122-2.122zM12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3m-1 8h2v6h-2zM1 11h6v2H1zm16 0h6v2h-6z");
}
</style><path class="llvh9zbpz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-flare"} {...others} />);
}

export default Component;
