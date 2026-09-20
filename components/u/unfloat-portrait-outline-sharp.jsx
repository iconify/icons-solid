import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mngza6bdp {
  fill: currentColor;
  d: path("M4 22V2h16v11h-2V4H6v16h7v2Zm10.5-10.925L11.425 8H14V6H8v6h2V9.4l3.075 3.1ZM15 22v-7h5v7Zm-3-10Z");
}
</style><path class="mngza6bdp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:unfloat-portrait-outline-sharp"} {...others} />);
}

export default Component;
