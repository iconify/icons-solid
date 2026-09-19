import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.llj9s3bkp {
  fill: currentColor;
  d: path("M18.99 5c0-1.1-.89-2-1.99-2h-7L7.66 5.34L19 16.68zM3.65 3.88L2.38 5.15L5 7.77V19c0 1.1.9 2 2 2h10.01c.35 0 .67-.1.96-.26l1.88 1.88l1.27-1.27z");
}
</style><path class="llj9s3bkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:no-sim"} {...others} />);
}

export default Component;
