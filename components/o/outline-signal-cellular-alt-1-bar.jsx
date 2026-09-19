import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.e6cuozbxd {
  fill: currentColor;
  d: path("M5 14h3v6H5z");
}
</style><path class="e6cuozbxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-signal-cellular-alt-1-bar"} {...others} />);
}

export default Component;
