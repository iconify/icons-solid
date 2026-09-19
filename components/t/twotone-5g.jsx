import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eg9fmg_ji {
  fill: currentColor;
  d: path("M16.5 13H19v2h-5V9h7c0-1.1-.9-2-2-2h-5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2v-4h-4.5zM3 13h5v2H3v2h5c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2H5V9h5V7H3z");
}
</style><path class="eg9fmg_ji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-5g"} {...others} />);
}

export default Component;
