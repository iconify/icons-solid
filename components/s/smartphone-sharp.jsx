import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jwizc5bwk {
  fill: currentColor;
  d: path("M6 22V2h12v20zm1-3.5h10v-13H7z");
}
</style><path class="jwizc5bwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:smartphone-sharp"} {...others} />);
}

export default Component;
