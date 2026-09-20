import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.egv9hvqtc {
  fill: currentColor;
  d: path("M3 21v-2h18v2zm0-8v-2h18v2zm0-8V3h18v2z");
}
</style><path class="egv9hvqtc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:density-medium-outline-sharp"} {...others} />);
}

export default Component;
