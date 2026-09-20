import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y2enkhqtx {
  fill: currentColor;
  d: path("M13 15h1.5v-2.25L16.25 15h1.825l-2.325-3l2.325-3H16.25l-1.75 2.25V9H13zm-6.5 0H11V9H6.5zM8 11.5V10h1.5v1.5zM8 14v-1.5h1.5V14zm-5 7V3h18v18zm2-2h14V5H5zm0 0V5z");
}
</style><path class="y2enkhqtx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:8k-outline-sharp"} {...others} />);
}

export default Component;
