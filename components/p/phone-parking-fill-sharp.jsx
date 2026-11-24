import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xwz8eyk0a {
  fill: currentColor;
  d: path("M2 5V3a1 1 0 0 1 1-1h6c.409 0 .777.249.928.629l2 5a1 1 0 0 1-.221 1.078L9.414 11L13 14.586l2.293-2.293a1 1 0 0 1 1.078-.221l5 2c.38.151.629.519.629.928v6a1 1 0 0 1-1 1h-2C9.611 22 2 14.389 2 5m14-3h2a3 3 0 1 1 0 6h-1v1a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1m1 4h1a1 1 0 0 0 0-2h-1Z");
}
</style><path class="xwz8eyk0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:phone-parking-fill-sharp"} {...others} />);
}

export default Component;
