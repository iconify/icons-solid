import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ir9ld_spy {
  fill: currentColor;
  d: path("M8 2h12a1 1 0 0 1 1 1v14a1 1 0 0 1-2 0V4H8a1 1 0 0 1 0-2M3 21V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1m9.832-7.555l-2-3a1 1 0 0 0-1.664 0l-2 3a1 1 0 0 0 0 1.11l2 3a1 1 0 0 0 1.664 0l2-3a1 1 0 0 0 0-1.11");
}
</style><path class="ir9ld_spy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:playing-cards-fill-sharp"} {...others} />);
}

export default Component;
