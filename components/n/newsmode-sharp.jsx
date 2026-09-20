import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jxg571b9c {
  fill: currentColor;
  d: path("M2 21V3h20v18zm4-4h12v-2H6zm0-4h4V7H6zm6 0h6v-2h-6zm0-4h6V7h-6z");
}
</style><path class="jxg571b9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:newsmode-sharp"} {...others} />);
}

export default Component;
