import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r7rkcvc8r {
  fill: currentColor;
  d: path("M4 17v-1h11.423v1zm15.292-.904L15.158 12l4.134-4.077l.708.708L16.573 12L20 15.389zM4 12.5v-1h8.577v1zM4 8V7h11.423v1z");
}
</style><path class="r7rkcvc8r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:menu-open-outline"} {...others} />);
}

export default Component;
