import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.cm3uw9b4x {
  fill: currentColor;
  d: path("M2 1.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V6h3.354A4 4 0 0 0 8 9v5c0 .364.097.706.268 1H2a1 1 0 0 1-1-1V9a3 3 0 0 1 3-3v3.5a.5.5 0 0 0 1 0V4H2.5a.5.5 0 0 1-.5-.5zM12 6a3 3 0 0 0-3 3v5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V9a3 3 0 0 0-3-3m-.5 3h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1 0-1");
}
</style><path class="cm3uw9b4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:mailbox-16-filled"} {...others} />);
}

export default Component;
