import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hr937vqed {
  fill: currentColor;
  d: path("m12.9 21l-2.85-7.05L3 11.1V9.7l4.875-1.825L2.8 2.8l1.425-1.425l18.4 18.4L21.2 21.2l-5.075-5.075L14.3 21zm4.775-9.025l-5.65-5.65L21 3z");
}
</style><path class="hr937vqed"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:near-me-disabled"} {...others} />);
}

export default Component;
