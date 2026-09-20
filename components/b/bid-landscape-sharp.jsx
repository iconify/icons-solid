import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i2_g6rcvy {
  fill: currentColor;
  d: path("M3 21V3h18v18zM19 7.25l-6.05 6.8L9 10.1l-4 4v2.85l4-4L13.05 17L19 10.25z");
}
</style><path class="i2_g6rcvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:bid-landscape-sharp"} {...others} />);
}

export default Component;
