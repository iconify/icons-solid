import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.sw-b7vbpv {
  fill: currentColor;
  d: path("M136 127.42V232a8 8 0 0 1-16 0V127.42a56 56 0 1 1 16 0");
}
</style><path class="sw-b7vbpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:map-pin-simple-fill"} {...others} />);
}

export default Component;
