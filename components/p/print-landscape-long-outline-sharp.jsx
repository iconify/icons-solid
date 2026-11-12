import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l0tecv-7w {
  fill: currentColor;
  d: path("M4 13h2v4h13V6.35h2V19H4zm10-9h3v1h3.05L21 6.35L18.225 14H2.6l-.95-1.35L4.425 5H7V4h3v1h4zm4.675 3H5.825l-1.8 5H16.85zM6 17h13.725zM5.825 7h12.85z");
}
</style><path class="l0tecv-7w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:print-landscape-long-outline-sharp"} {...others} />);
}

export default Component;
