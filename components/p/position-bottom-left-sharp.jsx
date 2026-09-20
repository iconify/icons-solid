import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ne6zcz2tb {
  fill: currentColor;
  d: path("M6 17h9v-3H6zm-3 4V3h18v18z");
}
</style><path class="ne6zcz2tb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:position-bottom-left-sharp"} {...others} />);
}

export default Component;
