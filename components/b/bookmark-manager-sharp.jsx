import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.flfcdwbmq {
  fill: currentColor;
  d: path("M14.23 21v-2.21l5.96-5.934l2.19 2.204L16.44 21zm5.96-4.985l.925-.956l-.924-.943l-.95.95zM3 19V5h6.596l2 2H21v1.696l-9.154 9.096V19z");
}
</style><path class="flfcdwbmq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:bookmark-manager-sharp"} {...others} />);
}

export default Component;
