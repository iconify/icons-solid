import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.illmc7b9d {
  fill: currentColor;
  d: path("M7 21v-3H5v-2h2V3h11v2H9v6h8v2H9v3h4v2H9v3z");
}
</style><path class="illmc7b9d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:currency-franc-outline-sharp"} {...others} />);
}

export default Component;
