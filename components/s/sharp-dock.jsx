import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tqx3kwm5o {
  fill: currentColor;
  d: path("M8 23h8v-2H8zM18 1.01L6 1v18h12zM16 15H8V5h8z");
}
</style><path class="tqx3kwm5o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-dock"} {...others} />);
}

export default Component;
