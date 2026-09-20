import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lhq8tkb-r {
  fill: currentColor;
  d: path("M10 18v-2h6v2zm-3.95 0L.375 12.325L1.8 10.9l4.25 4.25L15.2 6l1.425 1.425zM14 14v-2h6v2zm4-4V8h6v2z");
}
</style><path class="lhq8tkb-r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:sweep-outline"} {...others} />);
}

export default Component;
