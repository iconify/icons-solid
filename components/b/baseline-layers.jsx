import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wu32xnb_k {
  fill: currentColor;
  d: path("m11.99 18.54l-7.37-5.73L3 14.07l9 7l9-7l-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7l-9 7l1.63 1.27z");
}
</style><path class="wu32xnb_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-layers"} {...others} />);
}

export default Component;
