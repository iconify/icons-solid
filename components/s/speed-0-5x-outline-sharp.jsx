import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ik3lv8y0g {
  fill: currentColor;
  d: path("M3 17v-2h2v2zm10 0l3-5l-3-5h2l2 3.325L19 7h2l-3 5l3 5h-2l-2-3.325L15 17zm-7 0v-2h4v-2H6V7h6v2H8v2h4v6z");
}
</style><path class="ik3lv8y0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:speed-0-5x-outline-sharp"} {...others} />);
}

export default Component;
