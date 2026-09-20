import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrmk-0-rj {
  fill: currentColor;
  d: path("M3 21V5.8L5.3 3h13.4L21 5.8v2.325l-5 5V8H8v8l4-2l2.075 1.05L12 17.1V21zm11 0v-3.075l6.575-6.55l3.075 3.05L17.075 21zm6.575-5.6l.925-.975l-.925-.925l-.95.95zM5.4 6h13.2l-.85-1H6.25z");
}
</style><path class="nrmk-0-rj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:box-edit-sharp"} {...others} />);
}

export default Component;
