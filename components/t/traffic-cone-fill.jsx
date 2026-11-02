import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lpzmsjlui {
  fill: currentColor;
  d: path("M15.677 9H8.323l1.749-4.371A1 1 0 0 1 11 4h2c.409 0 .777.249.928.629Zm2 5H6.323l1.2-3h8.954ZM3 21a1 1 0 0 1 0-2h1.323l1.2-3h12.954l1.2 3H21a1 1 0 0 1 0 2Z");
}
</style><path class="lpzmsjlui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:traffic-cone-fill"} {...others} />);
}

export default Component;
