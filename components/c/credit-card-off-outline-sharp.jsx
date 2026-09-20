import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q55x4797l {
  fill: currentColor;
  d: path("m22 19.15l-2-2V12h-5.15l-4-4H20V6H8.85l-2-2H22zM9.15 12H4v6h11.15zm11.3 11.3l-3.3-3.3H2V4h2l2 2H4v2h1.15L.65 3.5l1.425-1.425l19.8 19.8z");
}
</style><path class="q55x4797l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:credit-card-off-outline-sharp"} {...others} />);
}

export default Component;
