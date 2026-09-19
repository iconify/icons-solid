import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h_qgrr0lu {
  fill: currentColor;
  d: path("M20 2H10L4 8v14h16zm-8 15l-4-4h3V9.02L13 9v4h3z");
}
</style><path class="h_qgrr0lu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-sim-card-download"} {...others} />);
}

export default Component;
