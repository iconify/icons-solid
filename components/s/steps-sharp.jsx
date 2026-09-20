import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sxfa-zben {
  fill: currentColor;
  d: path("M18.712 21L7.208 10H2.746L7.99 3.014L10 3.99v3.967l4.002-.971l1.989 6.002L21 17.998L20.25 21zm-5.702 0L1.997 11h4.82l10.43 10z");
}
</style><path class="sxfa-zben"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:steps-sharp"} {...others} />);
}

export default Component;
