import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gr9gnfb0h {
  fill: currentColor;
  d: path("M2 20V4h20v16zm2-2h16V8H4z");
}
</style><path class="gr9gnfb0h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:web-asset-sharp"} {...others} />);
}

export default Component;
