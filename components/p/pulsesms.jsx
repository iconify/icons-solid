import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.m1d59acvm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.335 14.005h23.128m-23.128 6.292h16.027m-16.027 6.291h8.926M38.858 5.5H9.142c-2.2 0-4 1.8-4 4v33l7.418-7.418h26.298c2.2 0 4-1.8 4-4V9.5c0-2.2-1.8-4-4-4");
}
</style><path class="m1d59acvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:pulsesms"} {...others} />);
}

export default Component;
