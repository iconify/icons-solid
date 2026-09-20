import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xjkv5pamc {
  fill: currentColor;
  d: path("M11.225 17H18v-2h-4.775zM6 17h3.075l7.575-7.55l-3.075-3.075L6 13.925zm8.5-7.575l-.925-.925zm-7 6.075v-.95l4.05-4.025l.475.45l.45.475L8.45 15.5zm4.525-4.525l.45.475l-.925-.925zM3 21V3h18v18zm2-2h14V5H5zM5 5v14z");
}
</style><path class="xjkv5pamc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:drive-file-rename-outline-sharp"} {...others} />);
}

export default Component;
