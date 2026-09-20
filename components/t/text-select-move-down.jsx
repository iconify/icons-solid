import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v2wzwhbsv {
  fill: currentColor;
  d: path("M4 5V4h16v1zm8 11.308L8.692 13l.708-.708l2.1 2.075V7.5h1v6.867l2.1-2.075l.708.708zM4 20v-1h16v1z");
}
</style><path class="v2wzwhbsv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:text-select-move-down"} {...others} />);
}

export default Component;
