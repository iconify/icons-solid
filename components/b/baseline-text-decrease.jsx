import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ti88hy8pn {
  fill: currentColor;
  d: path("M.99 19h2.42l1.27-3.58h5.65L11.59 19h2.42L8.75 5h-2.5zm4.42-5.61L7.44 7.6h.12l2.03 5.79zM23 11v2h-8v-2z");
}
</style><path class="ti88hy8pn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-text-decrease"} {...others} />);
}

export default Component;
