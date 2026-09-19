import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cnq_n9b0m {
  fill: currentColor;
  d: path("M0 15h2V9H0zm3 2h2V7H3zm19-8v6h2V9zm-3 8h2V7h-2zM16.5 3h-9C6.67 3 6 3.67 6 4.5v15c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5M16 19H8V5h8z");
}
</style><path class="cnq_n9b0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:vibration"} {...others} />);
}

export default Component;
