import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yh-qo7bkq {
  fill: currentColor;
  d: path("M5.5 14.5h11v-7h-11zM3 19V5h18v14z");
}
</style><path class="yh-qo7bkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:magnification-large-sharp"} {...others} />);
}

export default Component;
