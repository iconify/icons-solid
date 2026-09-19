import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jo3g7fr_f {
  fill: currentColor;
  d: path("M20 8H4V6h16zm-2-6H6v2h12zm4 8v12H2V10zm-6 6l-6-3.27v6.53z");
}
</style><path class="jo3g7fr_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-subscriptions"} {...others} />);
}

export default Component;
