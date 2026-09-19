import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h3ty8tbnv {
  fill: currentColor;
  d: path("M8 6h8v2H8z");
}

.mp_rw7b0q {
  fill: currentColor;
  d: path("M19 1H5v22h14zm-2 18H7V5h10z");
}
</style><path class="mp_rw7b0q"/><path class="h3ty8tbnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-ad-units"} {...others} />);
}

export default Component;
