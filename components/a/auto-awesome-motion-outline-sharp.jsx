import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k2bpz1b0k {
  fill: currentColor;
  d: path("M10 22V10h12v12zm2-2h8v-8h-8zm-6-2V6h12v2H8v10zm-4-4V2h12v2H4v10zm10 6v-8z");
}
</style><path class="k2bpz1b0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:auto-awesome-motion-outline-sharp"} {...others} />);
}

export default Component;
